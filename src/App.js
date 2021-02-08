import React, {useState} from 'react';
import { AppContainer } from './App.style'
import SearchInputBox from './components/SearchInputBox';
import VideoList from './components/VideoList';
import youtubeApi from './services/youtubeApi';
// import { response } from './searchApiResponsePartSnippet';

const App = () => {
  const [videos, setVideos] = useState([]);
  const searchVideosFor = async (searchText) => {
    await youtubeApi.get('./search', {
      params: {
        q: searchText
      }
    })
    .then((response) => {
      setVideos(response.data.items);
    })
    .catch((err) => {
      console.log(err);
    })
    // setVideos(response.data.items);
  }
  return (
    <AppContainer>
      <SearchInputBox handleSubmit={searchVideosFor}/>
      <VideoList videos={videos}/>
    </AppContainer>
  );
}

export default App;
