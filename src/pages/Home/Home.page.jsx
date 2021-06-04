import React, { useRef } from 'react';
// import { useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import './Home.styles.css';

import VideoList from '../../components/VideoList/VideoList';
import data from '../../data/youtube-videos-mock.json';

function HomePage() {
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Welcome to the Challenge!</h1>
      <VideoList collection={data} />
    </section>
  );
}

export default HomePage;
