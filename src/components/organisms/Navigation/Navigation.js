import React from 'react';
import styled from 'styled-components';

import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>hatta</Logo>
      <NavList />
      <Hamburger />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navigation;
