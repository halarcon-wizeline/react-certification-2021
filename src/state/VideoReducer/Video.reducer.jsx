import * as actionTypes from '../ActionTypes';

function setSelectedVideo(state, payload) {
  return {
    ...state,
    selectedVideo: { ...payload },
  };
}

function setQuery(state, payload) {
  return {
    ...state,
    query: payload,
  };
}

function setVideos(state, payload) {
  return {
    ...state,
    videos: payload,
  };
}

export default function reducer(state, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_VIDEO:
      return setSelectedVideo(state, action.payload);
    case actionTypes.SET_QUERY:
      return setQuery(state, action.payload);
    case actionTypes.SET_VIDEOS:
      return setVideos(state, action.payload);
    default:
      throw new Error('Unknown action');
  }
}