import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

import { createGlobalStyle } from 'styled-components';

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
    /* background-color: white; */
    /* box-sizing: border-box; */
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
      <GlobalStyle />
      <AuthProvider>
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
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
