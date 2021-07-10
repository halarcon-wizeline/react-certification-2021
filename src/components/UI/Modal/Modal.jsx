import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop';

const ModalStyled = styled.div`
  width: 380px;
  position: fixed;
  z-index: 500;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 33.5%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
  color: #333;
`;

const modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} onClick={props.onClose} />
      <ModalStyled
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </ModalStyled>
    </>
  );
};

export default modal;
