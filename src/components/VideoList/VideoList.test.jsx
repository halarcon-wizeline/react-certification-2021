import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoList from './VideoList';

describe('Render VideoList', () => {
  test('it should render nothing', () => {
    const collection = {
      items: [],
    };
    render(<VideoList collection={collection} />);
    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });

  test('It should render ALL the elements', () => {
    const filteredCollection = {
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
          id: {
            kind: 'youtube#video',
            videoId: 'nmXMgqjQzls',
          },
          snippet: {
            publishedAt: '2019-09-30T23:54:32Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Video Tour | Welcome to Wizeline Guadalajara',
            description:
              'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2019-09-30T23:54:32Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '7VY0u60YdqamyHOCAufd7r6qTsQ',
          id: {
            kind: 'youtube#video',
            videoId: 'HYyRZiwBWc8',
          },
          snippet: {
            publishedAt: '2019-04-18T18:48:04Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Wizeline Guadalajara | Bringing Silicon Valley to Mexico',
            description:
              'Wizeline continues to offer a Silicon Valley culture in burgeoning innovation hubs like Mexico and Vietnam. In 2018, our Guadalajara team moved into a ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/HYyRZiwBWc8/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2019-04-18T18:48:04Z',
          },
        },
      ],
    };
    render(
      <BrowserRouter>
        <VideoList collection={filteredCollection} />
      </BrowserRouter>
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(2);

    expect(
      screen.getByText(filteredCollection.items[0].snippet.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(filteredCollection.items[0].snippet.description)
    ).toBeInTheDocument();

    expect(
      screen.getByText(filteredCollection.items[1].snippet.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(filteredCollection.items[1].snippet.description)
    ).toBeInTheDocument();
  });

  test('It should remove elements without a videoId', () => {
    const unfilteredCollection = {
      items: [
        {
          kind: 'youtube#searchResult',
          etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
          id: {
            kind: 'youtube#channel',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          },
          snippet: {
            publishedAt: '2014-09-27T01:39:18Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Wizeline',
            description:
              "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
            thumbnails: {
              default: {
                url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
              },
              medium: {
                url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
              },
              high: {
                url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'upcoming',
            publishTime: '2014-09-27T01:39:18Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'erqeM78PZDWIBe8qOGHGM2WdSE8',
          id: {
            kind: 'youtube#video',
            videoId: 'nmXMgqjQzls',
          },
          snippet: {
            publishedAt: '2019-09-30T23:54:32Z',
            channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
            title: 'Video Tour | Welcome to Wizeline Guadalajara',
            description:
              'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Wizeline',
            liveBroadcastContent: 'none',
            publishTime: '2019-09-30T23:54:32Z',
          },
        },
      ],
    };
    render(
      <BrowserRouter>
        <VideoList collection={unfilteredCollection} />
      </BrowserRouter>
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(1);

    expect(
      screen.queryByText(unfilteredCollection.items[0].snippet.title)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(unfilteredCollection.items[0].snippet.description)
    ).not.toBeInTheDocument();

    expect(
      screen.getByText(unfilteredCollection.items[1].snippet.title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(unfilteredCollection.items[1].snippet.description)
    ).toBeInTheDocument();
  });
});
