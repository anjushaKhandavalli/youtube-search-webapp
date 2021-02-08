import React, {useState} from 'react';
import { AppContainer } from './App.style'
import SearchInputBox from './components/SearchInputBox';
import VideoList from './components/VideoList';
import youtubeApi from './services/youtubeApi';
// import { response } from './searchApiResponsePartSnippet';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');

  const searchVideosFor = async (searchText) => {
    await youtubeApi.get('./search', {
      params: {
        q: searchText,
        pageToken: nextPageToken
      }
    })
    .then((response) => {
      console.log("response",response)
      setVideos([...videos,...response.data.items]);
      setNextPageToken(response.data.nextPageToken);
    })
    .catch((error) => {
      console.log("error",error?.response?.data);
    })
    // setVideos(response.data.items);
  }

  return (
    <AppContainer>
      <SearchInputBox handleSubmit={searchVideosFor}/>
      <VideoList videos={videos} fetchMoreVideos={searchVideosFor}/>
    </AppContainer>
  );
}

export default App;
