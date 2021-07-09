import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from './Private.component';
import SecretPage from '../../pages/Secret';
import AuthProvider, { useAuth } from '../../providers/Auth';
import * as actionTypes from '../../state/ActionTypes';

describe('Private route', () => {
  const mockedUser = {
    id: '123',
    name: 'Wizeline',
    avatarUrl: 'https://usapng.com/images/bt/user-icon-6.png',
  };

  test.skip('Redirect to /', () => {
    const wrapper = ({ children }) => (
      <AuthProvider>
        <BrowserRouter>
          {children}
          <Private exact path="/favorites">
            <SecretPage></SecretPage>
          </Private>
        </BrowserRouter>
      </AuthProvider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });
    const { dispatch } = result.current;
    console.log(result.current);

    dispatch({
      type: actionTypes.AUTH_SET_USER,
      payload: mockedUser,
    });

    expect(screen.getByText('Welcome to the Challenge!')).toBeVisible();
  });
});
