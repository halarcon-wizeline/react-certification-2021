import React from 'react';
// import SearchIcon from '@material-ui/icons/Search';

import styled from 'styled-components';

const InputStyled = styled.input`
  margin: 0;
  padding: 0;
  margin: 0;
  background: #3e6d8a;
  border: none;
  height: 30px;
  padding: 10px 20px;
  color: white;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  return (
    <InputStyled
      className="Input"
      type="text"
      value={props.value}
      onChange={props.changed}
      onKeyDown={props.keyDown}
    />
  );
};

export default Input;
