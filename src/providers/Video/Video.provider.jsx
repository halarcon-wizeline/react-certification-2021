import React, { createContext, useContext, useReducer } from 'react';

import reducer from '../../state/VideoReducer';

import data from '../../data/youtube-videos-mock.json';

const initialState = {
  query: '',
  videos: data,
  selectedVideo: {},
};

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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VideoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}

export { useVideos };

export default VideoProvider;
