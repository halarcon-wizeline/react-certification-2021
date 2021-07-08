import React, { createContext, useContext, useReducer, useEffect } from 'react';

import reducer from '../../state/VideoReducer';
import * as actionTypes from '../../state/ActionTypes';

import data from '../../data/youtube-videos-mock.json';

const initialState = {
  query: '',
  videos: data,
  selectedVideo: {},
  favoriteVideos: { items: [] },
  theme: 'light',
};

const VideoContext = createContext({
  query: '',
  videos: [],
  selectedVideo: {},
  favoriteVideos: { items: [] },
  theme: 'light',
});

function useVideos() {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error(`Can't use "useVideos" without an VideoProvider!`);
  }
  return context;
}

function VideoProvider({ children }) {
  // console.log('[VideoProvider] loaded');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: actionTypes.LOAD_USER_SETTINGS,
    });
  }, []);

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
