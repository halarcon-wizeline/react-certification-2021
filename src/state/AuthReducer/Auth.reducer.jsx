import * as actionTypes from '../ActionTypes';
import loginApi from '../../data/login.api';

const start = (state) => {
  return { ...state, error: null, loading: true };
};

const setUser = (state, payload) => {
  console.log('setUser');
  const user = {
    ...state,
    id: payload.id,
    name: payload.name,
    avatarUrl: payload.avatarUrl,
    error: null,
    authenticated: true,
  };
  localStorage.setItem('REACT-CHALLENGE-AUTH', JSON.stringify(user));
  return user;
};
  
const failed = (state, error) => {
  console.log('failed');
  return { ...state, error: error, authenticated: false };
};

export const authenticate = (state, payload) => {
  // console.log('[action auth] auth');
  const { username, password } = payload;

  loginApi(username, password)
    .then(function (user) {
        return {
        ...state,
        id: user.id,
        name: user.name,
        avatarUrl: user.avatarUrl,
        error: null,
        authenticated: true,
      };
    })
    .catch(function (error) {
      console.log(error);
      return failed(state, error);
    });
};

const loadSettings = (state) => {
  // console.log('[action auth] isAuthenticated');
  let savedSettings = localStorage.getItem('REACT-CHALLENGE-AUTH');
  savedSettings = JSON.parse(savedSettings);

  if (savedSettings) {
    return {
      ...state,
      id: savedSettings.id,
      name: savedSettings.name,
      avatarUrl: savedSettings.avatarUrl,
      authenticated: Boolean(savedSettings),
    };
  }

  return {
    ...state,
    authenticated: Boolean(savedSettings),
  };
};
  
const logout = () => {
  // console.log('[action auth] logout');
  localStorage.removeItem('REACT-CHALLENGE-AUTH');
  return {
    id: null,
    name: null,
    avatarUrl: null,
    error: '',
    authenticated: false,
  };
};

export default function reducer(state, action) {
  // console.log('[authReducer] ', action.type, 'state', state);
  switch (action.type) {
    case actionTypes.AUTH_START:
      return start(state, action);
    case actionTypes.AUTH_AUTHENTICATE:
      return authenticate(state, action.payload);
    case actionTypes.AUTH_LOAD_SETTINGS:
      return loadSettings(state);
    case actionTypes.AUTH_SET_USER:
      return setUser(state, action.payload);
    case actionTypes.AUTH_LOGOUT:
      return logout();
    default:
      throw new Error('Unknown action');
  }
}
