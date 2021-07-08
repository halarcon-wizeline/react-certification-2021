import * as actionTypes from '../ActionTypes';

function isFavoriteVideo(video, favoriteVideos) {
  // console.log('[actions] isFavoriteVideo');
  const videoFound = favoriteVideos.items.findIndex(
    (item) => item.id.videoId === video.id.videoId
  );
  return videoFound;
}

function setSelectedVideo(state, video) {
  const newVideo = {
    ...video,
    isFavorite: isFavoriteVideo(video, state.favoriteVideos) > -1,
  };
  const newState = {
    ...state,
    selectedVideo: newVideo,
  };
  return { ...newState };
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

function loadUserSettings(state) {
  // console.log('[actions] loadUserSettings');

  let savedSettings = localStorage.getItem('REACT-CHALLENGE-USER-PREFERENCES');
  savedSettings = JSON.parse(savedSettings);

  if (savedSettings === null) {
    savedSettings = { theme: 'light', favoriteVideos: { items: [] } };
  }

  // console.log('userSettings loaded', savedSettings);
  return {
    ...state,
    favoriteVideos: savedSettings.favoriteVideos,
    theme: savedSettings.theme,
  };
}

function writeUserSettings(state) {
  console.log('[actions] writeUserSettings');
  localStorage.setItem('REACT-CHALLENGE-USER-PREFERENCES', JSON.stringify(state));
  console.log('Settings saved', state);
}

const toggleFavoriteVideo = (state, video, isFavorite) => {
  const newState = { ...state };
  const favoriteIndex = isFavoriteVideo(video, newState.favoriteVideos);

  if (!isFavorite) {
    if (favoriteIndex === -1) {
      const newVideo = {
        ...video,
        isFavorite: true,
      };
      newState.favoriteVideos.items.push(newVideo);
      newState.selectedVideo = newVideo;
    }
  } else if (favoriteIndex > -1) {
    const newVideo = {
      ...video,
      isFavorite: false,
    };
    newState.favoriteVideos.items.splice(favoriteIndex, 1);
    newState.selectedVideo = newVideo;
  }

  console.log(newState);
  writeUserSettings(newState);
  return { ...newState };
};

const toggleTheme = (state, theme) => {
  const newState = { ...state };
  newState.theme = theme;

  writeUserSettings(newState);
  return { ...newState };
};

export default function reducer(state, action) {
  console.log('[videoReducer] ', action.type, 'state', state);
  switch (action.type) {
    case actionTypes.SET_SELECTED_VIDEO:
      return setSelectedVideo(state, action.payload);
    case actionTypes.SET_QUERY:
      return setQuery(state, action.payload);
    case actionTypes.SET_VIDEOS:
      return setVideos(state, action.payload);
    case actionTypes.LOAD_USER_SETTINGS:
      return loadUserSettings(state);
    case actionTypes.ADD_TO_FAVORITES:
      return toggleFavoriteVideo(state, action.payload.video, action.payload.isFavorite);
    case actionTypes.TOGGLE_THEME:
      return toggleTheme(state, action.payload);
    default:
      throw new Error('Unknown action');
  }
}
