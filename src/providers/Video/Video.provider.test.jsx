import { renderHook } from '@testing-library/react-hooks';

import { useVideos } from './Video.provider';

describe('useVideos provider', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useVideos());
    const { query, videos, selectedVideo } = result.current;

    expect(query).toBe('');
    expect(videos).toEqual([]);
    expect(selectedVideo).toEqual({});
  });
});
