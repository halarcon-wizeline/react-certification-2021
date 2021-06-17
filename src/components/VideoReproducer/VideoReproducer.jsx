import React from 'react';
import styled from 'styled-components';

const VideoReproducerStyled = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & .channelTitle {
    padding: 10px 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    & h2 {
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
  return (
    <VideoReproducerStyled>
      <iframe
        width="100%"
        height="450"
        allowFullScreen
        frameBorder="0"
        title={props.name}
        src={props.src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      />
      <div className="channelTitle">
        <h2>{props.title}</h2>
      </div>
      <p className="description">{props.description}</p>
    </VideoReproducerStyled>
  );
};

export default VideoReproducer;
