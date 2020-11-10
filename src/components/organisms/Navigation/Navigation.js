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
  position: absolute;
  top: 0rem;
  left: 0rem;
  padding: 1.5rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${({ theme }) => theme.zIndex.level9};

  ${({ theme }) => theme.mq.bigTablet} {
    justify-content: flex-start;
    padding: 4rem 3rem;
  }
`;

export default Navigation;
