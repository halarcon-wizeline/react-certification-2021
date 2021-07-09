import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import VideoProvider, { useVideos } from './Video.provider';

describe('useVideos provider', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useVideos());
    const { query, videos, selectedVideo, favoriteVideos, theme } = result.current;

    expect(query).toBe('');
    expect(videos).toEqual([]);
    expect(selectedVideo).toEqual({});
    expect(favoriteVideos).toEqual({ items: [] });
    expect(theme).toEqual('light');
  });

  it('state', () => {
    const wrapper = ({ children }) => <VideoProvider>{children}</VideoProvider>;
    const { result } = renderHook(() => useVideos(), { wrapper });

    expect(result.current.state.query).toBe('');
    expect(result.current.state.selectedVideo).toEqual({});
    expect(result.current.state.favoriteVideos).toEqual({ items: [] });
    expect(result.current.state.theme).toEqual('light');
  });

  it.skip('load user settings', () => {});

});
