import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import VideoList from '../../components/VideoList';
import VideoReproducer from '../../components/VideoReproducer';
import { useVideos } from '../../providers/Video';

const SecretVideoPageStyled = styled.div`
  display: flex;
  width: 100%;

  & .videoList {
    width: 30%;
    height: 100%;
    overflow: scroll;
  }
`;

const SecretVideoPage = () => {
  console.log('[SecretVideoPage]');

  const history = useHistory();
  const { state } = useVideos();
  const { selectedVideo, favoriteVideos } = state;

  if (!selectedVideo.id) {
    history.push(`/favorites/`);
  }

  return (
    <SecretVideoPageStyled>
      <VideoReproducer video={selectedVideo} />
      <div className="videoList">
        <VideoList
          displayList="vertical"
          linkPrefix="/favorites/"
          collection={favoriteVideos}
        />
      </div>
    </SecretVideoPageStyled>
  );
};

export default SecretVideoPage;
