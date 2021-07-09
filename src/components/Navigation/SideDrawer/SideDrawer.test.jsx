import React from 'react';
import { render, screen } from '@testing-library/react';
import SideDrawer from './SideDrawer';
import AuthProvider from '../../../providers/Auth';

describe('Render SideDrawer', () => {
  test.skip('SideDrawer does not show Secret links if NOT authenticated', () => {
    render(
      <AuthProvider>
        <SideDrawer />
      </AuthProvider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).not.toBeInTheDocument();
    expect(screen.getByText('Logout')).not.toBeInTheDocument();
  });

  test.skip('SideDrawer shows Secret links if authenticated', () => {
    render(
      <AuthProvider>
        <SideDrawer />
      </AuthProvider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
