import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import VideoItem from './VideoItem';
import { useVideos } from '../../providers/Video';

const VideoListStyled = styled.ul`
  padding: ${({ props }) => (props.displayList === 'horizontal' ? '20px' : '0')};
  margin: 0px auto;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: ${({ props }) =>
    props.displayList === 'horizontal' ? 'row' : 'column'};

  a {
    width: ${({ props }) => (props.displayList === 'horizontal' ? '' : '100%')};
  }
`;

const VideoList = (props) => {
  // console.log('[VideoList]', props);
  const { videos, setSelectedVideo } = useVideos();

  const collection = props.collection || videos;

  const history = useHistory();

  const linkHandler = (item) => {
    setSelectedVideo({ ...item });
    history.push(`/${item.id.videoId}`);
  };

  return (
    <VideoListStyled props={props}>
      {collection.items.length > 0 &&
        collection.items
          .filter((item = []) => item.id.videoId)
          .map((item = []) => (
            <Link
              key={item.id.videoId}
              to={`/${item.id.videoId}`}
              onClick={() => linkHandler(item)}
            >
              <VideoItem
                role="listitem"
                key={item.etag}
                display={props.displayList}
                title={item.snippet.title}
                description={item.snippet.description}
                image={item.snippet.thumbnails.high.url}
              />
            </Link>
          ))}
    </VideoListStyled>
  );
};

export default VideoList;
