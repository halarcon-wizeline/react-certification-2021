import React from 'react';

import { useVideos } from '../../providers/Video';
import VideoList from '../../components/VideoList/VideoList';

function SecretPage() {
  console.log('[SecretPage]');
  const { state } = useVideos();
  const { favoriteVideos } = state;

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
