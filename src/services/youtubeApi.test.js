import youtubeApi from './youtubeApi';
describe('youtubeApi',() => {
  it('should initialize fetch with the right youtube api defaults', () => {
    expect(youtubeApi.defaults.baseURL).toBe('https://www.googleapis.com/youtube/v3/');
    expect(youtubeApi.defaults.params).toStrictEqual({key: "Enter your Api Key here", maxResults: 10, part: "snippet"})
  })
})