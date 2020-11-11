import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import routes from 'routes';

const Logo = () => (
  <StyledLogo>
    <Link to={routes.home}>hatta</Link>
  </StyledLogo>
);

const StyledLogo = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Logo;
