import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import styled from 'styled-components';

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
  & .LeftMenu {
    flex-direction: row;
    display: flex;
    height: 50%;
  }

  & .RightMenu {
    flex-direction: row;
    display: flex;
    height: 100%;
    margin-top: 15px;
  }

  & .Menu {
    margin-right: 30px;
    padding: 6px 10px;
  }
`;

const Toolbar = (props) => {
  const [checked, setChecked] = useState(false);
  const [switchLabel, setSwitchLabel] = useState('Dark Mode');
  const [inputSearch, setInputSearch] = useState('wizeline');

  const toggleChecked = () => {
    const label = checked ? 'Dark Mode' : 'Light Mode';

    setChecked(!checked);
    setSwitchLabel(label);
  };

  const inputChangeHandler = (event) => {
    setInputSearch(event.target.value);
  };

  const inputKeyDownHandler = () => {};

  return (
    <ToolbarStyled>
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