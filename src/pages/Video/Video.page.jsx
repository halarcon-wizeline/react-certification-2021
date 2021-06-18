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

const VideoPage = (props) => {
  console.log('[VideoPage] props', props);

  const history = useHistory();
  let { selectedVideo } = useVideos();

  if (!selectedVideo.id) {
    history.push(`/`);
  }

  const src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}?controls=0&autoplay=0`;

  return (
    <VideoPageStyled>
      <VideoReproducer
        id={selectedVideo.id.videoId}
        src={src}
        title={selectedVideo.snippet.title}
        description={selectedVideo.snippet.description}
      />
      <div className="videoList">
        <VideoList displayList="vertical" />
      </div>
    </VideoPageStyled>
  );
};

export default VideoPage;
