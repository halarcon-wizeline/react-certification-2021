import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const LogoStyled = styled.div`
  background-color: transparent;
  padding: 8px;
  height: 100%;
  cursor: pointer;
`;

const Logo = (props) => {
  let image = '/broken-image.jpg';
  if (props.image) image = props.image;
  return (
    <LogoStyled onClick={props.clicked}>
      {!props.image}
      <Avatar src={image} />
    </LogoStyled>
  );
};

export default Logo;
