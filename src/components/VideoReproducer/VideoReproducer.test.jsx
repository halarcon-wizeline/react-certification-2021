import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoReproducer from './VideoReproducer';

describe('Render VideoReproducer', () => {
  test('it should render the title', () => {
    const video = {
      id: 'nmXMgqjQzls',
      src: 'https://www.youtube.com/embed/nmXMgqjQzls?controls=0&autoplay=0',
      title: 'This is the title',
      description: 'This is the description',
    };

    render(
      <VideoReproducer
        id={video.id}
        src={video.src}
        title={video.title}
        description={video.description}
      />
    );

    expect(screen.getByText(video.title)).toBeInTheDocument();
  });

  test('it should render the description', () => {
    const video = {
      id: 'nmXMgqjQzls',
      src: 'https://www.youtube.com/embed/nmXMgqjQzls?controls=0&autoplay=0',
      title: 'This is the title',
      description: 'This is the description',
    };

    render(
      <VideoReproducer
        id={video.id}
        src={video.src}
        title={video.title}
        description={video.description}
      />
    );

    expect(screen.getByText(video.description)).toBeInTheDocument();
  });
});
