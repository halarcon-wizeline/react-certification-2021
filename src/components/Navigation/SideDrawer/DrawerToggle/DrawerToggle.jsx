import React from 'react';
import styled from 'styled-components';

const DrawerToggleStyled = styled.div`
  width: 24px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  margin-right: 50px;
  padding: 10px 4px;
  overflow: visible;
  font-size: 1.5rem;
  @media screen and (max-width: 425px) {
    padding: 8px 0px;
    margin-right: 30px;
  }
  & div {
    width: 100%;
    height: 3px;
    background-color: white;
    margin-bottom: 2px;
  }
`;

const DrawerToggle = (props) => {
  return (
    <DrawerToggleStyled data-testid="drawer-toggle" onClick={props.onClick}>
      <div />
      <div />
      <div />
    </DrawerToggleStyled>
  );
};

export default DrawerToggle;
