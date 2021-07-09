import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoReproducer from './VideoReproducer';
import AuthProvider from '../../providers/Auth';

describe('Render VideoReproducer', () => {

  const video =     {
    "kind": "youtube#searchResult",
    "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
    "isFavorite": false,
    "id": {
      "kind": "youtube#video",
      "videoId": "nmXMgqjQzls"
    },
    "snippet": {
      "publishedAt": "2019-09-30T23:54:32Z",
      "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
      "title": "Video Tour | Welcome to Wizeline Guadalajara",
      "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Wizeline",
      "liveBroadcastContent": "none",
      "publishTime": "2019-09-30T23:54:32Z"
    }
  };

  test('it should render title and description of a NON favorite video', () => {
    render(
      <AuthProvider>
        <VideoReproducer
          video={video}
        />
      </AuthProvider>
    );

    expect(screen.getByText(video.snippet.title)).toBeInTheDocument();
    expect(screen.getByText(video.snippet.description)).toBeInTheDocument();
  });

  test('it should render title and description of a favorite video', () => {
    let favoriteVideo = {...video};
    favoriteVideo.isFavorite = true;

    render(
      <AuthProvider>
        <VideoReproducer
          video={favoriteVideo}
        />
      </AuthProvider>
    );

    expect(screen.getByText(video.snippet.title)).toBeInTheDocument();
    expect(screen.getByText(video.snippet.description)).toBeInTheDocument();
  });

  test('it should NOT render button "Add to Favorites" if NOT authenticated', () => {
    let favoriteVideo = {...video};
    favoriteVideo.isFavorite = true;

    render(
      <AuthProvider>
        <VideoReproducer
          video={favoriteVideo}
        />
      </AuthProvider>
    );

    expect(screen.queryByDisplayValue("ADD TO FAVORITES")).toBeNull();
  });

  test.skip('it should render button "Add to Favorites" if authenticated', () => {
  });

});
