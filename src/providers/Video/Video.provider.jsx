import React from 'react';
import { createContext, useContext, useState } from 'react';

import data from '../../data/youtube-videos-mock.json';

const VideoContext = createContext({
  videos: [],
  selectedVideo: {},
});

function useVideos() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  const [videos, setVideos] = useState(data);
  const [selectedVideo, setSelectedVideo] = useState({});

  return (
    <VideoContext.Provider value={{ videos, setVideos, selectedVideo, setSelectedVideo }}>
      {children}
    </VideoContext.Provider>
  );
}

export { useVideos };

export default VideoProvider;
