import React from 'react';
import { useTheme } from '../../providers/Theme';
import styled from 'styled-components';

const LayoutStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.foreground};
`;

const Layout = (props) => {
  const { themes, currentTheme } = useTheme();

  return <LayoutStyled theme={themes[currentTheme]}>{props.children}</LayoutStyled>;
};

export default Layout;
