import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../providers/Theme';

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
  background-color: ${({ theme }) => theme.videoItemBackground};
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.videoItemBackgroundHover};
  }
`;

const VideoItemVerticalStyled = styled.li`
  display: flex;
  flex-direction: row;
  height: 98px;
  padding: 6px 10px;
  border: ${({ theme }) => theme.videoItemBorder};
  &:hover {
    background-color: ${({ theme }) => theme.videoItemBackgroundHover};
  }
`;

const VideoItem = (props) => {
  const { themes, currentTheme } = useTheme();

  return props.display === 'vertical' ? (
    <VideoItemVerticalStyled theme={themes[currentTheme]}>
      <VideoItemImage src={props.image} alt={props.title} {...props} />
      <VideoItemContent title={props.title} description={props.description} {...props} />
    </VideoItemVerticalStyled>
  ) : (
    <VideoItemHorizontalStyled theme={themes[currentTheme]}>
      <VideoItemImage src={props.image} alt={props.title} {...props} />
      <VideoItemContent title={props.title} description={props.description} {...props} />
    </VideoItemHorizontalStyled>
  );
};

export default VideoItem;
