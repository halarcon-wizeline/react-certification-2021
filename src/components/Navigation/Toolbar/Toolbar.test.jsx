import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { render, screen } from '@testing-library/react';
import Toolbar from './Toolbar';

import { useVideos } from '../../../providers/Video';
import AuthProvider from '../../../providers/Auth';

describe('Render Toolbar', () => {
  test('it should have an input', () => {
    const { result } = renderHook(() => useVideos());
    const { query } = result.current;

    render(
      <AuthProvider>
        <Toolbar query={{ query }} />
      </AuthProvider>
    );
    const items = screen.queryAllByRole('textbox');
    expect(items).toHaveLength(1);
  });

  test('it should have an avatar', () => {
    const { result } = renderHook(() => useVideos());
    const { query } = result.current;

    render(
      <AuthProvider>
        <Toolbar query={{ query }} />
      </AuthProvider>
    );
    const items = screen.queryAllByRole('img');
    expect(items).toHaveLength(1);
  });
});
