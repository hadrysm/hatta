import React, { useContext, useRef, useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

import { NavigationStateContext } from 'providers/NavigationStateProvider';

import Hamburger from 'components/atoms/Hamburger/Hamburger';
import Logo from 'components/atoms/Logo/Logo';
import NavList from 'components/molecules/NavList/NavList';

const Navigation = () => {
  const { toggleMenuVisibility, isMenuOpen } = useContext(NavigationStateContext);

  const container = useRef(null);

  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.4 } });

  useEffect(() => {
    const { current } = container;

    tl.from(current, { y: -60, autoAlpha: 0 });
  }, []);

  return (
    <Wrapper ref={container}>
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
