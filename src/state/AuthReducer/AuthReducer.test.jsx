import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';

import * as actionTypes from '../ActionTypes';
import AuthProvider, { useAuth } from '../../providers/Auth';

describe('AuthReducer', () => {
  const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://usapng.com/images/bt/user-icon-6.png',
  };

  test('AuthReducer AUTH_SET_USER ', async () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    const { dispatch } = result.current;

    act(() => {
      dispatch({
        type: actionTypes.AUTH_SET_USER,
        payload: mockedUser,
      });
    });

    expect(result.current.state.id).toBe('123');
    expect(result.current.state.name).toBe('Wizeline');
    expect(result.current.state.avatarUrl).toBe(
      'https://usapng.com/images/bt/user-icon-6.png'
    );
    expect(result.current.state.authenticated).toBe(true);
  });
});
