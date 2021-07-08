import React, { createContext, useContext, useState } from 'react';

import data from '../../data/youtube-videos-mock.json';

const VideoContext = createContext({
  query: '',
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
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState(data);
  const [selectedVideo, setSelectedVideo] = useState({});

  return (
    <VideoContext.Provider
      value={{
        videos,
        setVideos,
        selectedVideo,
        setSelectedVideo,
        query,
        setQuery,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export { useVideos };

export default VideoProvider;
