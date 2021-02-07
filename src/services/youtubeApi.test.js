import youtubeApi from './youtubeApi';
describe('youtubeApi',() => {
  it('should initialize fetch with the right youtube api defaults', () => {
    expect(youtubeApi.defaults.baseURL).toBe('https://www.googleapis.com/youtube/v3/');
    expect(youtubeApi.defaults.params).toStrictEqual({key: "AIzaSyBePx-FRH03DefIzIVrDi1L9NHCT7KkWmY", maxResults: 100, part: "snippet"})
  })
})