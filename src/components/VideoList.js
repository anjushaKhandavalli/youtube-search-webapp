import React from 'react';
import VideoItem from './VideoItem';
import InfiniteScroll from "react-infinite-scroll-component";
import { VideoListContainer } from './VideoItem.style';


const VideoList = ({videos,fetchMoreVideos}) => {
  const renderVideos =  videos.map((video) => {
    return <VideoItem data-testid={video.id.videoId} key={video.id.videoId} video={video}/>
});

return (
    <VideoListContainer data-testid="video-list">
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchMoreVideos}
        hasMore={true}
        loader={videos.length === 0 ? null : <h4>Loading...</h4>}
      >
        {renderVideos}
      </InfiniteScroll>
    </VideoListContainer>
  )
}

export default VideoList;