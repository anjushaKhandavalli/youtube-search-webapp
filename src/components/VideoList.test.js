import React from 'react';
import { render } from "@testing-library/react";
import VideoList from './VideoList';


describe("videoList", () => {
  const mockFetchMoreVideos = jest.fn();
  const mockVideos = [
    {
      id: {
        kind: "youtube#video",
        videoId: "cat_1"
      },
      snippet: {
        title: "cat_1 video title",
        description: "description about the cat_1",
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
        videoId: "cat_2"
      },
      snippet: {
        title: "cat_2 video title",
        description: "description about the cat_2",
        thumbnails: {
          medium : {
            url: "https://i.ytimg.com/vi/AETFvQoabc/default.jpg",
          }
        }
      }
    }
  ]
  it("should render the videolist", () => {
    const {container, getByTestId } = render(<VideoList videos={mockVideos} fetchMoreVideos={mockFetchMoreVideos}/>)

    expect(container).toMatchSnapshot();
    expect(getByTestId('video-list')).toBeDefined();
  })

  it("should not render loading text when there are no videos", () => {
    const { queryByText } = render(<VideoList videos={[]} fetchMoreVideos={mockFetchMoreVideos}/>)

    expect(queryByText("Loading...")).not.toBeInTheDocument;

  })
})