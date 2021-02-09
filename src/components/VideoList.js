import React from 'react';
import VideoItem from './VideoItem';
import InfiniteScroll from "react-infinite-scroll-component";
import { VideoListContainer } from './VideoItem.style';
import { LOADING } from "../constants";


const VideoList = ({videos, fetchMoreVideos}) => {
  const renderVideos =  videos.map((video) => {
    return <VideoItem data-testid={video.id.videoId} key={video.id.videoId} video={video}/>
});

return (
    <VideoListContainer data-testid="video-list">
      <InfiniteScroll
        dataLength={videos.length}
        next={videos.length > 0 ? fetchMoreVideos : () => {}}
        hasMore={true}
        loader={videos.length === 0 ? null : <h4>{LOADING}</h4>}
      >
        {renderVideos}
      </InfiniteScroll>
    </VideoListContainer>
  )
}

export default VideoList;