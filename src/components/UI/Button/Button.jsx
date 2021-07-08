import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  color: #333;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  width: 170px;
  font-size: 15px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
  .Favorite {
    color: #5c9210;
  }
`;

const Button = (props) => {
  return (
    <ButtonStyled
      type={props.type === 'submit' ? 'submit' : 'button'}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
