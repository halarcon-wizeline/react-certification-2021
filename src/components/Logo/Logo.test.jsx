import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Render Logo', () => {
  test('Logo should display default src', () => {
    render(<Logo />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/broken-image.jpg');
  });

  test('Logo should display src and alt attr', () => {
    render(<Logo image="/logo.svg" alt="Logo" />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('alt', 'Logo');
  });
});