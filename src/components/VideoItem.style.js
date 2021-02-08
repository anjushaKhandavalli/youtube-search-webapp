import styled from 'styled-components';

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const Thumbnail = styled.img`
  width: 30%;
  height: 20%;
`;

export const VideoInfo = styled.div`
 width: 64%;
 padding-left: 20px;
`;

export const Title = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Description = styled.h4`
`;

export const VideoListContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;