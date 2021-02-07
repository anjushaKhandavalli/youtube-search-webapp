import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import youtubeApi from './services/youtubeApi';

jest.mock('./services/youtubeApi');
describe('App', () => {
  it('should render the search box to search videos',() => {
    const { getByTestId } = render(<App/>)

    expect(getByTestId('search-box-input')).toBeDefined();
  })

  it('should fetch videos for the search text',() => {
    jest.spyOn(youtubeApi, 'get').mockResolvedValue([]);
    const { getByTestId } = render(<App/>)

    const searchInput = getByTestId('search-box-input');
    fireEvent.change(searchInput,{target: {value: 'sampleText'}});
    fireEvent.submit(searchInput);

    expect(youtubeApi.get).toHaveBeenCalledTimes(1);
  })
})
