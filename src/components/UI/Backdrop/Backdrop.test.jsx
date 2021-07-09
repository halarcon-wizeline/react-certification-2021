import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Backdrop from './Backdrop';

describe('Render Backdrop', () => {
  test('Backdrop NOT displayed', () => {
    render(<Backdrop show={false} />);
    expect(screen.getByTestId('backdrop')).toBeNull();
  });

  test('Backdrop to be displayed', () => {
    render(<Backdrop show={true} />);
    expect(screen.getByTestId('backdrop')).not.toBeNull();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Backdrop onClick={handleClick} />);
    const clicked = screen.getByTestId('backdrop');
    fireEvent.click(clicked);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
