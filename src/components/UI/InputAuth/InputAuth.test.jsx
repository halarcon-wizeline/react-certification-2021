import React from 'react';
import { render, screen } from '@testing-library/react';
import InputAuth from './InputAuth';

describe('Render InputAuth', () => {
  test('it should render the label with the value "username"', () => {
    render(<InputAuth placeholder="username" onChange={() => {}} />);
    expect(screen.getByText('username')).toBeInTheDocument();
  });

  test('it should render the label with the value "password"', () => {
    render(<InputAuth value="password" onChange={() => {}} />);
    expect(screen.getByText('password')).toBeInTheDocument();
  });
});
