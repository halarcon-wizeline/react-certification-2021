import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Backdrop from '../../UI/Backdrop';

const SideDrawerStyled = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0px;
  z-index: 200;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  margin: 0;
  padding: 8px 0px;
  transform: ${(props) => {
    console.log('here', props.open);
    return !props.open ? 'translate(-100%)' : 'translate(0)';
  }};
  & .NavigationItems {
    margin: 0;
    padding: 0;
  }
  & .NavigationItems li {
    display: block;
    width: 100%;
    padding: 8px 16px;
    border-bottom: 1px solid #ccc;
  }
  & .NavigationItems li a {
    color: #333;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    font-size: 16px;
    font-weight: 400;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

const SideDrawer = (props) => {
  console.log('[SideDrawer] props', props);

  if (props.open) {
    SideDrawerStyled.backgroundColor = 'cyan';
  }

  return (
    <>
      <Backdrop show={props.open} clicked={props.onClose} />
      <SideDrawerStyled
        onClick={props.onClose}
        onKeyDown={props.onClose}
        open={props.open}
      >
        <nav>
          <ul className="NavigationItems">
            <li>
              <NavLink exact to="/" activeClassName="activeLink">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </SideDrawerStyled>
    </>
  );
};

export default SideDrawer;
