import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Toolbar from './Toolbar';
import AuthProvider from '../../../providers/Auth';
import VideoProvider from '../../../providers/Video';
import ThemeProvider from '../../../providers/Theme';

describe('Render Toolbar', () => {
  test('it should have an input', () => {
    render(
      <AuthProvider>
        <Toolbar query="wizeline" />
      </AuthProvider>
    );
    const items = screen.queryAllByRole('textbox');
    expect(items).toHaveLength(1);
  });

  test('it should have an avatar', () => {
    render(
      <AuthProvider>
        <Toolbar query="wizeline" />
      </AuthProvider>
    );
    const items = screen.queryAllByRole('img');
    expect(items).toHaveLength(1);
  });

  test('it should change the Theme', () => {
    render(
      <AuthProvider>
        <ThemeProvider>
          <VideoProvider>
            <Toolbar query="wizeline" />
          </VideoProvider>
        </ThemeProvider>
      </AuthProvider>
    );
    const theme = screen.getByLabelText('Light Mode');
    expect(screen.getByText('Light Mode')).toBeVisible();
    fireEvent.click(theme);
    expect(screen.getByText('Dark Mode')).toBeVisible();
  });

  test('it should open the modal', () => {
    render(
      <AuthProvider>
        <ThemeProvider>
          <VideoProvider>
            <Toolbar query="wizeline" />
          </VideoProvider>
        </ThemeProvider>
      </AuthProvider>
    );

    const logo = screen.getByRole('img');
    fireEvent.click(logo);
    expect(screen.getByText('Login')).toBeVisible();
  });

  test('it should close the modal', () => {
    render(
      <AuthProvider>
        <ThemeProvider>
          <VideoProvider>
            <Toolbar query="wizeline" />
          </VideoProvider>
        </ThemeProvider>
      </AuthProvider>
    );

    const logo = screen.getByRole('img');
    fireEvent.click(logo);
    expect(screen.getByText('Login')).toBeVisible();
    const close = screen.getByText('CANCEL');
    fireEvent.click(close);
    expect(screen.getByText('Login')).not.toBeVisible();
  });

  test('it should change the search text to "New Search"', async () => {
    render(
      <AuthProvider>
        <Toolbar query="Search" />
      </AuthProvider>
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'New Search' } });
    expect(screen.getByDisplayValue('New Search')).not.toBeNull();
  });

  test('it should trigger keyDown', async () => {
    render(
      <AuthProvider>
        <Toolbar query="Search" />
      </AuthProvider>
    );

    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Learn' } });
    expect(screen.getByDisplayValue('Learn')).not.toBeNull();

    fireEvent.change(input, { key: 'Enter', code: 'Enter' });
  });

});
