import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DrawerToggle from './DrawerToggle';

describe('Render DrawerToggle', () => {
  test('DrawerToggle element exists', () => {
    render(<DrawerToggle />);
    expect(screen.getByTestId('drawer-toggle')).toBeTruthy();
  });

  //   test('calls onClick when clicked', () => {
  //     const handleClick = jest.fn();
  //     render(<DrawerToggle onClick={handleClick} />);
  //     const toggle = screen.getByTestId('drawer-toggle');
  //     fireEvent.click(toggle);
  //     expect(handleClick).toHaveBeenCalledTimes(1);
  //     debugger;
  //   });
});
