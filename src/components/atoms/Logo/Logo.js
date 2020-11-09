import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Logo = () => (
  <StyledLogo>
    <Link to="/">hatta</Link>
  </StyledLogo>
);

const StyledLogo = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Logo;
