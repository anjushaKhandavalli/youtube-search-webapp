import youtubeApi from './youtubeApi';

const fetchVideos = (params) => {
  return youtubeApi.get('./search', {
    params: {
      ...params
    }
  })
}

export default fetchVideos;