import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Render Input', () => {
  test('it should render an input with the value "Search"', () => {
    render(<Input placeholder="Search" onChange={() => {}} />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('it should render an input with the value "wizeline"', () => {
    render(<Input value="wizeline" onChange={() => {}} />);
    expect(screen.getByDisplayValue('wizeline')).toBeInTheDocument();
  });
});
