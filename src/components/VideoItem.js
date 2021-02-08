import React from 'react';
import { VideoItemContainer, VideoInfo, Thumbnail, Title, Description } from './VideoItem.style';

const VideoItem = ({video}) => {
  return (
    <VideoItemContainer data-testid="video-item">
        <Thumbnail data-testid="thumbnail" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
        <VideoInfo>
            <Title data-testid="title">{video.snippet.title}</Title>
            <Description data-testid="description">{video.snippet.description}</Description>
        </VideoInfo>
    </VideoItemContainer>
)
}

export default VideoItem;