import React from 'react';
import { AppContainer } from './App.style'
import SearchInputBox from './components/SearchInputBox';
import youtubeApi from './services/youtubeApi';



const App = () => {
  const searchVideosFor = async (searchText) => {
    await youtubeApi.get('./search', {
      params: {
        q: searchText
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <AppContainer>
      <SearchInputBox handleSubmit={searchVideosFor}/>
    </AppContainer>
  );
}

export default App;
