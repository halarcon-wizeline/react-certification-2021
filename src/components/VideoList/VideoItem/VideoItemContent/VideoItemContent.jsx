import React from 'react';
import { useTheme } from '../../../../providers/Theme';

import styled from 'styled-components';

const VideoItemContentHorizontalStyled = styled.div`
  padding: 16px;
  font-weight: normal;
  overflow: hidden;
  & h2 {
    font-size: 20px;
    text-align: left;
    color: ${({ theme }) => theme.foreground};
    margin-bottom: 0.35em;
  }
  & p {
    font-size: 14px;
    text-align: left;
    color: ${({ theme }) => theme.videoItemDescriptionColor};
  }
`;

const VideoItemContentVerticalStyled = styled.div`
  overflow: hidden;
  & h2 {
    padding-left: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.foreground};
    font-weight: normal;
  }
`;

const VideoItemContent = (props) => {
  const { themes, currentTheme } = useTheme();

  return props.display === 'vertical' ? (
    <VideoItemContentVerticalStyled props={props} theme={themes[currentTheme]}>
      <h2>{props.title}</h2>
    </VideoItemContentVerticalStyled>
  ) : (
    <VideoItemContentHorizontalStyled props={props} theme={themes[currentTheme]}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </VideoItemContentHorizontalStyled>
  );
};

export default VideoItemContent;
