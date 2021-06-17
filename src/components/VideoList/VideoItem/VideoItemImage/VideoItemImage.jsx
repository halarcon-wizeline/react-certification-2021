import React from 'react';
import styled from 'styled-components';

const VideoItemImageHorizontalStyled = styled.div`
  width: 100%;
  height: 140px;
  overflow: hidden;
  position: relative;
  & img {
    position: absolute;
    width: 345px;
    top: -25%;
    left: 0;
  }
`;

const VideoItemImageVerticalStyled = styled.div`
  & img {
    width: 98px;
  }
`;

const VideoItemImage = (props) => {
  return props.display === 'vertical' ? (
    <VideoItemImageVerticalStyled>
      <img src={props.src} alt={props.alt} />
    </VideoItemImageVerticalStyled>
  ) : (
    <VideoItemImageHorizontalStyled>
      <img src={props.src} alt={props.alt} />
    </VideoItemImageHorizontalStyled>
  );
};

export default VideoItemImage;
