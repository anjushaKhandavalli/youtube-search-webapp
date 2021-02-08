import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import App from './App';
import youtubeApi from './services/youtubeApi';

jest.mock('./services/youtubeApi');
describe('App', () => {
  it('should render the search box to search videos',() => {
    const { getByTestId } = render(<App/>)

    expect(getByTestId('search-box-input')).toBeDefined();
  })

  it('should make an youtube api call to fetch videos for the search text',() => {
    jest.spyOn(youtubeApi, 'get').mockResolvedValue([]);
    const { getByTestId } = render(<App/>)

    const searchInput = getByTestId('search-box-input');
    fireEvent.change(searchInput,{target: {value: 'sampleText'}});
    fireEvent.submit(searchInput);

    expect(youtubeApi.get).toHaveBeenCalledTimes(1);
    expect(youtubeApi.get).toHaveBeenCalledWith("./search", {params: {q: "sampleText"}});
  })

  it('should render cat related videos while searching for cat',async() => {
    const mockVideos = {
      data: {
        items: [
          {
            id: {
              kind: "youtube#video",
              videoId: "123"
            },
            snippet: {
              title: "persian cat",
              description: "description about the persian",
              thumbnails: {
                medium : {
                  url: "https://i.ytimg.com/vi/AETFvQonfV8/default.jpg",
                }
              }
            }
          },
          {
            id: {
              kind: "youtube#video2",
              videoId: "456"
            },
            snippet: {
              title: "bengal cat",
              description: "description about the bengal cat",
              thumbnails: {
                medium : {
                  url: "https://i.ytimg.com/vi/AETFvQoabc/default.jpg",
                }
              }
            }
          }
        ] 
      }
    }
    jest.spyOn(youtubeApi, 'get').mockResolvedValue(mockVideos);
    const { container, getAllByTestId, getByTestId, rerender } = render(<App/>)

    const searchInput = getByTestId('search-box-input');
    fireEvent.change(searchInput,{target: {value: 'cat'}});
    fireEvent.submit(searchInput);
    await act(() => {
      rerender(<App/>);
    })
    expect(container).toMatchSnapshot();
    expect(getAllByTestId('video-item')).toHaveLength(2);
    expect(getAllByTestId('title')[0].textContent).toBe('persian cat');
    expect(getAllByTestId('title')[1].textContent).toBe('bengal cat');
  });
})
