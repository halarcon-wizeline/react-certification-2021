import React from 'react';
import styled from 'styled-components';

const InputAuthStyled = styled.input`
  margin: 0;
  background-color: none;
  border: none;
  border-bottom: 1px solid #666;
  height: 100%;
  padding: 1px 2px;
  width: 100%;
  margin-bottom: 10px;
  &:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }
`;

const LabelStyled = styled.div`
  font-size: 12px;
  color: #666;
`;

const InputAuth = (props) => {
  // console.log(props);
  return (
    <>
      <LabelStyled>{props.elementConfig.placeholder}</LabelStyled>
      <InputAuthStyled
        type={props.elementConfig.type}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.keyDown}
      />
    </>
  );
};

export default InputAuth;
