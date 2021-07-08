import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import VideoItem from './VideoItem';
import { useVideos } from '../../providers/Video';
import * as actionTypes from '../../state/ActionTypes';

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
  const { state, dispatch } = useVideos();
  let { videos } = props.collection || state;

  const history = useHistory();

  if (props.collection) {
    videos = props.collection;
  }
  let linkPrefix = props.linkPrefix || '/';

  const linkHandler = (item) => {
    dispatch({ type: actionTypes.SET_SELECTED_VIDEO, payload: item });
    history.push(`${linkPrefix}${item.id.videoId}`);
  };

  return (
    <VideoListStyled props={props}>
      {videos.items.length > 0 &&
        videos.items
          .filter((item = []) => item.id.videoId)
          .map((item = []) => (
            <Link
              key={item.id.videoId}
              to={`${linkPrefix}${item.id.videoId}`}
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
