import React from 'react';
import { VideoItemContainer, VideoInfo, Thumbnail, Title, Description } from './VideoItem.style';

const VideoItem = ({video}) => {
  return (
    <VideoItemContainer>
        <Thumbnail src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
        <VideoInfo>
            <Title>{video.snippet.title}</Title>
            <Description>{video.snippet.description}</Description>
        </VideoInfo>
    </VideoItemContainer>
)
}

export default VideoItem;