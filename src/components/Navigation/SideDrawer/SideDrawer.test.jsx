import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { renderHook } from '@testing-library/react-hooks';

import * as actionTypes from '../../../state/ActionTypes';
import SideDrawer from './SideDrawer';
import AuthProvider, { useAuth } from '../../../providers/Auth';

describe('Render SideDrawer', () => {
  test('SideDrawer does not show Secret links if NOT authenticated', () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <SideDrawer />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.queryByText('Favorites')).toBeNull();
    expect(screen.queryByText('Logout')).toBeNull();
  });

  test('SideDrawer shows Secret links if authenticated', () => {
    const mockedUser = {
      id: '123',
      name: 'Wizeline',
      avatarUrl: 'https://usapng.com/images/bt/user-icon-6.png',
    };

    const wrapper = ({ children }) => (
      <BrowserRouter>
        <AuthProvider>
          <SideDrawer open={true} />
          {children}
        </AuthProvider>
      </BrowserRouter>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });
    const { dispatch } = result.current;

    act(() => {
      dispatch({
        type: actionTypes.AUTH_SET_USER,
        payload: mockedUser,
      });
    });

    render(
      <BrowserRouter>
        <AuthProvider>
          <SideDrawer open={true} />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
