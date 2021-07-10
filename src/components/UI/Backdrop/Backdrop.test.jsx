import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Backdrop from './Backdrop';

describe('Render Backdrop', () => {
  test('Backdrop NOT displayed', () => {
    render(<Backdrop show={false} />);
    expect(screen.queryByTestId('backdrop')).toBeNull();
  });

  test('Backdrop to be displayed', () => {
    render(<Backdrop show />);
    expect(screen.getByTestId('backdrop')).not.toBeNull();
  });

  test('Backdrop displayed to call click', () => {
    const handleClick = jest.fn();
    render(<Backdrop show onClick={handleClick} />);
    const backdrop = screen.getByTestId('backdrop');
    fireEvent.click(backdrop);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
