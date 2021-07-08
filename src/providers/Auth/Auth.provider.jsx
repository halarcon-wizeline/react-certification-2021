import React, { createContext, useContext, useReducer, useEffect } from 'react';

import reducer from '../../state/AuthReducer';
import * as actionTypes from '../../state/ActionTypes';

const initialState = {
  id: null,
  name: null,
  avatarUrl: null,
  error: '',
  authenticated: false,
};

const AuthContext = createContext({
  id: null,
  name: null,
  avatarUrl: null,
  error: '',
  authenticated: false,
});

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  // console.log('[AuthProvider] loaded');
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: actionTypes.AUTH_LOAD_SETTINGS,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };

export default AuthProvider;
