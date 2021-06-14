import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('Render App', () => {
  test('it should render Welcome to the Challenge!', () => {
    render(<App />);
    expect(screen.getByText('Welcome to the Challenge!')).toBeInTheDocument();
  });
});
