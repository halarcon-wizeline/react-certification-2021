import React from 'react';
import styled from 'styled-components';

const VideoItemStyled = styled.div`
  flex-direction: column;
  flex-flow: row wrap;
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
  & .content {
    padding: 16px;
  }
  & div,
  & h2,
  & p {
    margin: 0px;
    padding: 0px;
  }
  & h2 {
    font-size: 20px;
    text-align: left;
    color: #333;
    font-weight: normal;
    margin-bottom: 0.35em;
  }
  & p {
    font-size: 14px;
    text-align: left;
    color: rgba(0, 0, 0, 0.54);
    font-weight: normal;
  }
  & .imageMask {
    width: 345px;
    height: 140px;
    overflow: hidden;
    position: relative;
    & img {
      position: absolute;
      width: 345px;
      top: -25%;
      left: 0;
    }
  }
  &:hover {
    background-color: #eee;
  }
`;

const VideoItem = (props) => {
  return (
    <VideoItemStyled role="listitem">
      <div className="imageMask">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </VideoItemStyled>
  );
};

export default VideoItem;
