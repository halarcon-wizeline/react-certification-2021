import React from 'react';
// import SearchIcon from '@material-ui/icons/Search';

import styled from 'styled-components';

const InputStyled = styled.input`
  margin: 0;
  background-color: #3e6d8a;
  border: none;
  border-radius: 5px;
  height: 100%;
  padding: 10px 20px;
  color: white;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  return (
    <InputStyled
      role="input"
      className="Input"
      type="text"
      placeholder="Search"
      value={props.value}
      onChange={props.changed}
      onKeyDown={props.keyDown}
    />
  );
};

export default Input;
