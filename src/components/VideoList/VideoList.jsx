import React from 'react';
import styled from 'styled-components';

import VideoItem from './VideoItem';

const VideoListStyled = styled.div`
  padding: 20px;
  margin: 0px auto;
  flex: 1 1 0%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
`;

const VideoList = (props) => {

  return (
    <VideoListStyled role="list">
      {
        props.collection.items.map((item = []) => (
          <VideoItem
            key={item.etag}
            title={item.snippet.title}
            description={item.snippet.description}
            image={item.snippet.thumbnails.high.url}
          />
        ))
      }
    </VideoListStyled>
  );
};

export default VideoList;
