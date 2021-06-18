import React from 'react';
import { render, screen } from '@testing-library/react';
import Toolbar from './Toolbar';

describe('Render Toolbar', () => {
  test('it should have an input', () => {
    render(<Toolbar />);
    const items = screen.queryAllByRole('textbox');
    expect(items).toHaveLength(1);
  });

  test('it should have an avatar', () => {
    render(<Toolbar />);
    const items = screen.queryAllByRole('img');
    expect(items).toHaveLength(1);
  });
});
