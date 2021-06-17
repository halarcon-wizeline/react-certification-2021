import React, { useRef } from 'react';
import './Home.styles.css';
import styled from 'styled-components';

import VideoList from '../../components/VideoList/VideoList';

const TitleStyled = styled.h2`
  margin: 0px;
  padding: 12px 0px;
  font-size: 3.75rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: -0.00833em;
`;

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <section className="homepage" ref={sectionRef}>
      <TitleStyled>Welcome to the Challenge!</TitleStyled>
      <VideoList displayList="horizontal" />
    </section>
  );
}

export default HomePage;
