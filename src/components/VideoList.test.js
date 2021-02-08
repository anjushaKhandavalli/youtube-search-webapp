import React from 'react';
import { render } from "@testing-library/react";
import VideoList from './VideoList';


describe("videoList", () => {
  const mockVideos = [
    {
      id: {
        kind: "youtube#video",
        videoId: "video_1"
      },
      snippet: {
        title: "video_1 title",
        description: "description about the video_1",
        thumbnails: {
          medium : {
            url: "https://i.ytimg.com/vi/AETFvQonfV8/default.jpg",
          }
        }
      }
    },
    {
      id: {
        kind: "youtube#video2",
        videoId: "video_2"
      },
      snippet: {
        title: "video_2 title",
        description: "description about the video_2",
        thumbnails: {
          medium : {
            url: "https://i.ytimg.com/vi/AETFvQoabc/default.jpg",
          }
        }
      }
    }
  ]
  it("should render the videolist", () => {
    const {container, getByTestId } = render(<VideoList videos={mockVideos}/>)

    expect(container).toMatchSnapshot();
    expect(getByTestId('video-list')).toBeDefined();
  })
})