import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import VideoList from '../../components/VideoList';
import VideoReproducer from '../../components/VideoReproducer';
import { useVideos } from '../../providers/Video';

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

  const history = useHistory();
  const { state } = useVideos();
  const { selectedVideo } = state;

  if (!selectedVideo.id) {
    history.push(`/`);
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
