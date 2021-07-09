import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';
import { useVideos } from '../../providers/Video';
import Button from '../UI/Button';

import * as actionTypes from '../../state/ActionTypes';

const VideoReproducerStyled = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & .title {
    padding: 10px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    & h2 {
      width: 100%;
      font-weight: 400;
      line-height: 1.334;
      letter-spacing: 0em;
    }
  }
  & .description {
    margin: 0px;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    padding: 0px 30px;
  }
`;

const VideoReproducer = (props) => {
  // console.log('[VideoReproducer] props', props);
  const { state } = useAuth();
  const { authenticated } = state;
  const { dispatch } = useVideos();

  let initIsFavorite = props.video.isFavorite || false;
  const [isFavorite, setIsFavorite] = useState(initIsFavorite);

  const src = `https://www.youtube.com/embed/${props.video.id.videoId}?controls=0&autoplay=0`;

  useEffect(() => {
    initIsFavorite = props.video.isFavorite || false;
    setIsFavorite(props.video.isFavorite);
  }, [props.video.isFavorite]);

  const toggleFavoriteVideoHandler = () => {
    setIsFavorite(!isFavorite);

    dispatch({
      type: actionTypes.ADD_TO_FAVORITES,
      payload: { video: props.video, isFavorite },
    });
  };

  return (
    <VideoReproducerStyled>
      <iframe
        width="100%"
        height="450"
        allowFullScreen
        frameBorder="0"
        title={props.video.snippet.title}
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="title">
        <h2>{props.video.snippet.title}</h2>
        {authenticated ? (
          <Button type="submit" onClick={toggleFavoriteVideoHandler}>
            {isFavorite ? 'REMOVE FROM ' : 'ADD TO '} FAVORITES
          </Button>
        ) : null}
      </div>
      <p className="description">{props.video.snippet.description}</p>
    </VideoReproducerStyled>
  );
};

export default VideoReproducer;
