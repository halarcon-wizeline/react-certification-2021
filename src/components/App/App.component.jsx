import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createGlobalStyle } from 'styled-components';
import AuthProvider from '../../providers/Auth';
import VideoProvider from '../../providers/Video';
import ThemeProvider from '../../providers/Theme';

import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoPage from '../../pages/Video';
import Private from '../Private';
import Layout from '../Layout';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body,
  div,
  h2,
  p {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyle />
          <VideoProvider>
            <Layout>
              <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
              <SideDrawer open={showSideDrawer} onClose={sideDrawerCloseHandler} />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/favorites">
                  <SecretPage />
                </Private>
                <Route exact path="/:id">
                  <VideoPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </VideoProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
