import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useVideos } from '../../../providers/Video';
import { searchYoutubeVideo } from '../../../externalAPI/youtube';

import Input from '../../UI/Input/index';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const ToolbarStyled = styled.div`
  height: 64px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: #1c5476;
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
  const { query, setQuery, setVideos } = useVideos();

  const [checked, setChecked] = useState(false);
  const [switchLabel, setSwitchLabel] = useState('Dark Mode');
  const [inputSearch, setInputSearch] = useState('wizeline');

  const toggleChecked = () => {
    const label = checked ? 'Dark Mode' : 'Light Mode';

    setChecked(!checked);
    setSwitchLabel(label);
  };

  const getRelatedVideos = () => {
    if (inputSearch !== query) {
      setQuery(inputSearch);
      searchYoutubeVideo(inputSearch).then((response) => {
        setVideos(response);
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

  return (
    <ToolbarStyled role="toolbar">
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
            label={switchLabel}
          />
        </FormGroup>
        <Logo />
      </div>
    </ToolbarStyled>
  );
};

export default Toolbar;
