import React from 'react';
import VideoItem from './VideoItem';
import { VideoListContainer } from './VideoListContainer.style';

const VideoList = ({videos}) => {
  const renderVideos =  videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video}/>
});

return <VideoListContainer>{renderVideos}</VideoListContainer>;
}

export default VideoList;