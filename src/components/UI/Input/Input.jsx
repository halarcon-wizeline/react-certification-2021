import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../providers/Theme';
// import SearchIcon from '@material-ui/icons/Search';

const InputStyled = styled.input`
  margin: 0;
  background-color: ${({ theme }) => theme.inputBackground};
  border: none;
  border-radius: 5px;
  height: 100%;
  padding: 10px 20px;
  color: ${({ theme }) => theme.inputColor};
  width: 100%;
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const { themes, currentTheme } = useTheme();

  return (
    <InputStyled
      theme={themes[currentTheme]}
      role="textbox"
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.keyDown}
    />
  );
};

export default Input;
