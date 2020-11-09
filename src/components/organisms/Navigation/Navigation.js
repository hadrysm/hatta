import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';

const Navigation = () => {
  const [isMenuOpen, setMenuVisibility] = useState(false);
  const toggleMenuVisibility = () => setMenuVisibility(prevState => !prevState);
  const { pathname } = window.location;

  useEffect(() => {
    setMenuVisibility(false);
  }, [pathname]);

  return (
    <Wrapper>
      <Logo />
      <NavList isMenuOpen={isMenuOpen} />
      <Hamburger onClick={toggleMenuVisibility} isMenuOpen={isMenuOpen} />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Navigation;
