import React, {useState} from 'react';
import { AppContainer } from './App.style'
import SearchInputBox from './components/SearchInputBox';
import VideoList from './components/VideoList';
import fetchVideos from './services/fetchVideos';
// import { response } from './searchApiResponsePartSnippet';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [searchText, setSearchText] = useState('');

  const clearState = () => {
    setVideos([]);
    setNextPageToken('');
    setSearchText('');
  }
  const searchVideosFor = async (keyword) => {
    clearState();
    const params = {
      q: keyword
    }
    await fetchVideos(params)
    .then((response) => {
      setVideos(response.data.items);
      setNextPageToken(response.data.nextPageToken);
      setSearchText(keyword);
    })
    .catch((error) => {
      console.log("error",error?.response?.data);
    })
    // setVideos(response.data.items);
  }

  const fetchMoreVideos = async() => {
    const params = {
      q: searchText,
      pageToken: nextPageToken,
    }
    await fetchVideos(params)
    .then((response) => {
      setVideos([...videos,...response.data.items]);
      setNextPageToken(response.data.nextPageToken);
    })
    .catch((error) => {
      console.log("error",error?.response?.data);
    })
  }

  return (
    <AppContainer>
      <SearchInputBox handleSubmit={searchVideosFor}/>
      <VideoList videos={videos} fetchMoreVideos={fetchMoreVideos}/>
    </AppContainer>
  );
}

export default App;
