import React from 'react';
import styled from 'styled-components';

import VideoItemImage from './VideoItemImage';
import VideoItemContent from './VideoItemContent';

const VideoItemHorizontalStyled = styled.li`
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  width: 345px;
  height: 345px;
  margin: 10px;
  overflow: hidden;
  display: inline-block;
  background-color: #fff;
  transition: 0.3s;
  &:hover {
    background-color: #eee;
  }
`;

const VideoItemVerticalStyled = styled.li`
  display: flex;
  flex-direction: row;
  height: 98px;
  padding: 6px 10px;
  border: 1px solid #eee;
`;

const VideoItem = (props) => {
  return props.display === 'vertical' ? (
    <VideoItemVerticalStyled>
      <VideoItemImage src={props.image} alt={props.title} {...props} />
      <VideoItemContent title={props.title} description={props.description} {...props} />
    </VideoItemVerticalStyled>
  ) : (
    <VideoItemHorizontalStyled>
      <VideoItemImage src={props.image} alt={props.title} {...props} />
      <VideoItemContent title={props.title} description={props.description} {...props} />
    </VideoItemHorizontalStyled>
  );
};

export default VideoItem;
