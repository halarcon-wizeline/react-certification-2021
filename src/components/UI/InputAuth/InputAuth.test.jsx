import React from 'react';
import { render, screen } from '@testing-library/react';
import InputAuth from './InputAuth';

describe('Render InputAuth', () => {
  test('it should render the label with the value "username"', () => {
    const elementConfig = { placeholder: 'username' };
    render(<InputAuth onChange={() => {}} elementConfig={elementConfig} />);
    expect(screen.getByText('username')).toBeInTheDocument();
  });

  test('it should render the label with the value "password"', () => {
    const elementConfig = { placeholder: 'password' };
    render(<InputAuth onChange={() => {}} elementConfig={elementConfig} />);
    expect(screen.getByText('password')).toBeInTheDocument();
  });
});
