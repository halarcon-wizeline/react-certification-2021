import React from 'react';
import styled from 'styled-components';

import VideoList from '../../components/VideoList';
import VideoReproducer from '../../components/VideoReproducer';
import { useVideos } from '../../providers/Video';
import NotFound from '../NotFound';

const VideoPageStyled = styled.div`
  display: flex;
  width: 100%;

  & .videoList {
    width: 30%;
    height: 100%;
    overflow: scroll;
  }
`;

const VideoPage = () => {
  console.log('[VideoPage]');

  const { state } = useVideos();
  const { selectedVideo } = state;

  if (!selectedVideo.id) {
    return <NotFound />;
  }

  return (
    <VideoPageStyled>
      <VideoReproducer video={selectedVideo} />
      <div className="videoList">
        <VideoList displayList="vertical" />
      </div>
    </VideoPageStyled>
  );
};

export default VideoPage;
