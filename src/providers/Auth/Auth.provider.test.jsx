import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

import AuthProvider, { useAuth } from './Auth.provider';

describe('useAuth provider', () => {
  it('initialize', () => {
    const { result } = renderHook(() => useAuth());
    const { id, name, avatarUrl, authenticated } = result.current;

    expect(id).toBe(null);
    expect(name).toEqual(null);
    expect(avatarUrl).toEqual(null);
    expect(authenticated).toEqual(false);
  });

  it('state', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.state.id).toBe(null);
    expect(result.current.state.name).toEqual(null);
    expect(result.current.state.avatarUrl).toEqual(null);
    expect(result.current.state.authenticated).toEqual(false);
  });

  it.skip('auth load settings', () => {});
});
