import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Render Input', () => {
  test('it should render an input with the wizeline test', () => {
    render(<Input placeholder="Search" />);
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
  });

  test('it should render an input with the the value wizeline', () => {
    render(<Input value="wizeline" onChange={() => {}} />);
    expect(screen.getByDisplayValue('wizeline')).toBeInTheDocument();
  });
});
