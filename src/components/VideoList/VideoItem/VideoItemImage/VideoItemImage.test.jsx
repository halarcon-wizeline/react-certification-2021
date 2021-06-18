import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoItemImage from './VideoItemImage';

describe('Render VideoItemImage', () => {
  test('it should render the alt text', () => {
    const alt = 'Alt Text';

    render(<VideoItemImage src="" alt={alt} />);

    expect(screen.getByAltText(alt)).toBeInTheDocument();
  });
});
