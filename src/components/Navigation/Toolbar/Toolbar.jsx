import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useTheme } from '../../../providers/Theme';

import { useVideos } from '../../../providers/Video';
import { useAuth } from '../../../providers/Auth';
import * as actionTypes from '../../../state/ActionTypes';
import { searchYoutubeVideo } from '../../../externalAPI/youtube';

import Input from '../../UI/Input/index';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import Modal from '../../UI/Modal';
import AuthModal from '../../../containers/AuthModal';

const ToolbarStyled = styled.div`
  height: 64px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.toolbarBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  color: white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%),
    0px 1px 10px 0px rgb(0 0 0 / 12%);
  @media screen and (max-width: 425px) {
    height: 56px;
  }
  & .LeftMenu {
    flex-direction: row;
    display: flex;
    height: 50%;
    @media screen and (max-width: 425px) {
      height: 60%;
      width: 100%;
    }
  }
  & .RightMenu {
    flex-direction: row;
    display: flex;
    height: 100%;
    margin-top: 15px;
    @media screen and (max-width: 425px) {
      display: none;
    }
  }
`;

const Toolbar = (props) => {
  const history = useHistory();

  const { state: authState } = useAuth();

  const { themes, currentTheme, setCurrentTheme } = useTheme();
  const { state: videosState, dispatch: videosDispatch } = useVideos();
  const { query } = props.query || videosState;

  // const isLight = videosState.theme !== 'light' || currentTheme !== 'light';
  const isLight = currentTheme !== 'light';
  // TODO overwrite theme, setCurrentTheme

  const [checked, setChecked] = useState(isLight);

  const [inputSearch, setInputSearch] = useState('wizeline');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleChecked = () => {
    const newTheme = checked ? themes.light.id : themes.dark.id;
    setCurrentTheme(newTheme);
    setChecked(!checked);
    videosDispatch({ type: actionTypes.TOGGLE_THEME, payload: newTheme });
  };

  const getRelatedVideos = () => {
    if (inputSearch !== query) {
      videosDispatch({ type: actionTypes.SET_QUERY, payload: inputSearch });
      searchYoutubeVideo(inputSearch).then((response) => {
        videosDispatch({ type: actionTypes.SET_VIDEOS, payload: response });
        history.push('/');
      });
    }
  };

  const inputChangeHandler = (event) => {
    setInputSearch(event.target.value);
  };

  const inputKeyDownHandler = (event) => {
    if (event.key === 'Enter') {
      getRelatedVideos(inputSearch);
    }
  };

  const openLoginModalHandler = () => {
    setShowLoginModal(!showLoginModal);
  };

  const closeLoginModalHandler = () => {
    setShowLoginModal(false);
  };

  return (
    <ToolbarStyled role="toolbar" theme={themes[currentTheme]}>
      <div className="LeftMenu">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <Input
          value={inputSearch}
          keyDown={inputKeyDownHandler}
          changed={inputChangeHandler}
        />
      </div>
      <div className="RightMenu">
        <FormGroup>
          <FormControlLabel
            control={<Switch checked={checked} onChange={toggleChecked} />}
            label={themes[currentTheme].label}
          />
        </FormGroup>
        {!authState.authenticated ? (
          <Logo clicked={openLoginModalHandler} />
        ) : (
          <Logo image={authState.avatarUrl} />
        )}

        {/* logoUrl={props.avatarUrl}  */}
        <Modal show={showLoginModal} modalClosed={closeLoginModalHandler}>
          <AuthModal modalClosed={closeLoginModalHandler} />
        </Modal>
      </div>
    </ToolbarStyled>
  );
};

export default Toolbar;
