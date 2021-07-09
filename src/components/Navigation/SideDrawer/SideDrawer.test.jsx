import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
});

describe('Authenticated SideDrawer', () => {
  const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://usapng.com/images/bt/user-icon-6.png',
  };

  test('SideDrawer shows Secret links if authenticated', () => {

    const wrapper = ({ children }) => (
      <BrowserRouter>
        <AuthProvider>
          <SideDrawer open />
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
          <SideDrawer open />
        </AuthProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  test('SideDrawer click Secret "Logout" link if authenticated', () => {

    const wrapper = ({ children }) => (
      <BrowserRouter>
        <AuthProvider>
          <SideDrawer open />
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

    const handleClick = jest.fn();
    render(
      <BrowserRouter>
        <AuthProvider>
          <SideDrawer open onClose={handleClick} />
        </AuthProvider>
      </BrowserRouter>
    );

    const logoutLink = screen.getByText('Logout');
    expect(logoutLink).toBeInTheDocument();

    fireEvent.click(logoutLink);
    fireEvent.click(logoutLink);
    expect(handleClick).toHaveBeenCalledTimes(2);

  });
});
