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

function App() {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  console.log("showSideDrawer", showSideDrawer);
  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  const sideDrawerCloseHandler = () => {
    setShowSideDrawer(false);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
          <SideDrawer
            open={showSideDrawer}
            onClose={sideDrawerCloseHandler}
          />
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
