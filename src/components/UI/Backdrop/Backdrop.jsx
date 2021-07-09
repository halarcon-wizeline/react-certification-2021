import React from 'react';
import styled from 'styled-components';

const BackdropStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const Backdrop = (props) => {
  return (
    <>
      {props.show ? (
        <BackdropStyled role="button" data-testid="backdrop" onClick={props.onClick} />
      ) : null}
    </>
  );
};
export default Backdrop;
