import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Hamburger = ({ isMenuOpen, ...props }) => (
  <BurgerWrapper {...props}>
    <Burger isMenuOpen={isMenuOpen} />
  </BurgerWrapper>
);

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool,
};

Hamburger.defaultProps = {
  isMenuOpen: false,
};

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

  ::after,
  ::before {
    content: '';
    position: absolute;
    right: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    transform-origin: center;
    transition: transform 0.2s cubic-bezier(0.17, 0.67, 1, 1.23);
  }

  ::before {
    top: 3px;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(-3px) rotate(135deg)' : 'translateY(0) rotate(0deg)'};
  }

  ::after {
    top: -3px;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? 'translateY(3px) rotate(-135deg)' : 'translateY(0px) rotate(0deg)'};
  }
`;

export default Hamburger;
