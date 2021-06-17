import React from 'react';
import styled from 'styled-components';

const VideoItemContentHorizontalStyled = styled.div`
  padding: 16px;
  font-weight: normal;
  overflow: hidden;
  & h2 {
    font-size: 20px;
    text-align: left;
    color: #333;
    margin-bottom: 0.35em;
  }
  & p {
    font-size: 14px;
    text-align: left;
    color: rgba(0, 0, 0, 0.54);
  }
`;

const VideoItemContentVerticalStyled = styled.div`
  overflow: hidden;
  & h2 {
    padding-left: 8px;
    font-size: 16px;
    color: #333;
    font-weight: normal;
  }
`;

const VideoItemContent = (props) => {
  return props.display === 'vertical' ? (
    <VideoItemContentVerticalStyled props={props}>
      <h2>{props.title}</h2>
    </VideoItemContentVerticalStyled>
  ) : (
    <VideoItemContentHorizontalStyled props={props}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </VideoItemContentHorizontalStyled>
  );
};

export default VideoItemContent;
