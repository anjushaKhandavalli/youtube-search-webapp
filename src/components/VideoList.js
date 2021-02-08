import React from 'react';
import VideoItem from './VideoItem';
import { VideoListContainer } from './VideoItem.style';


const VideoList = ({videos}) => {
  const renderVideos =  videos.map((video) => {
    return <VideoItem data-testid={video.id.videoId} key={video.id.videoId} video={video}/>
});

return <VideoListContainer data-testid="video-list">{renderVideos}</VideoListContainer>;
}

export default VideoList;