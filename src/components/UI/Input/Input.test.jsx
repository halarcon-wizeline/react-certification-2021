import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Render Input', () => {
  test('it should render an input with the wizeline test', () => {
    render(<Input />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });
});
