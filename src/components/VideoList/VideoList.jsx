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
  //   console.log('[VideoList] props', props);

  const displayItems = (items) => {
    let newItems = [];
    if (items) {
      newItems = items.map((item) => (
        <VideoItem
          key={item.etag}
          title={item.snippet.title}
          description={item.snippet.description}
          image={item.snippet.thumbnails.high.url}
        />
      ));
    }
    return newItems;
  };

  return (
    <VideoListStyled>
      {props.collection.items.length > 0 ? (
        displayItems(props.collection.items)
      ) : (
        <h2>No videos found</h2>
      )}
    </VideoListStyled>
  );
};

export default VideoList;
