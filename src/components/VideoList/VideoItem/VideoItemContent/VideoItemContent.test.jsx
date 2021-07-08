import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoItemContent from './VideoItemContent';

describe('Render VideoItemContent', () => {
  test('it should render the title', () => {
    const title = 'This is the title';
    const description = 'This is the description';

    render(<VideoItemContent title={title} description={description} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });
});

describe('Render VideoItemContent', () => {
  test('it should render the description', () => {
    const title = 'This is the title';
    const description = 'This is the description';

    render(<VideoItemContent title={title} description={description} />);

    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
