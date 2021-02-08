import React from 'react';
import { render } from "@testing-library/react";
import VideoItem from "./VideoItem";
const mockVideo = {
  id: {
    kind: "youtube#video",
    videoId: "video_1"
  },
  snippet: {
    title: "video title",
    description: "description about the video",
    thumbnails: {
      medium : {
        url: "https://i.ytimg.com/vi/AETFvQonfV8/default.jpg",
      }
    }
  }
}
describe("VideoItem", () => {
  it("should render the video item with thumbnail, title and description",() => {
    const {container, getByTestId } = render(<VideoItem video={mockVideo}/>)

    expect(container).toMatchSnapshot();
    expect(getByTestId('thumbnail')).toBeDefined();
    expect(getByTestId('title')).toBeDefined();
    expect(getByTestId('description')).toBeDefined();
  })
})