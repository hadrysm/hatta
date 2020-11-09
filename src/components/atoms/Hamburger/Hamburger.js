import React from 'react';
import styled from 'styled-components';

const Hamburger = props => (
  <BurgerWrapper {...props}>
    <Burger />
  </BurgerWrapper>
);

const BurgerWrapper = styled.button`
  width: 35px;
  height: 35px;
  padding: 0.5rem;
  border: none;
  background-color: transparent;
  outline: none;
`;

const Burger = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};

  ::after,
  ::before {
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  ::before {
    top: 6px;
  }

  ::after {
    top: -6px;
  }
`;

export default Hamburger;
