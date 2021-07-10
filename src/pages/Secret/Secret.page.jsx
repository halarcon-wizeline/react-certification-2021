import React from 'react';

import { useVideos } from '../../providers/Video';
import VideoList from '../../components/VideoList/VideoList';

function SecretPage(props) {
  // console.log('[SecretPage]');
  const { state } = useVideos();
  let { favoriteVideos } = props.collection || state;

  if (props.collection) {
    favoriteVideos = props.collection;
  }

  return (
    <section className="secretPage">
      <VideoList
        displayList="horizontal"
        linkPrefix="/favorites/"
        collection={favoriteVideos || { items: [] }}
      />
    </section>
  );
}

export default SecretPage;
