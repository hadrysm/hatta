import React from 'react';
import styled from 'styled-components';
import TPLink from 'providers/PageTransitionProviders';

import routes from 'routes';

const Logo = () => (
  <StyledLogo>
    <TPLink to={routes.home}>hatta</TPLink>
  </StyledLogo>
);

const StyledLogo = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Logo;
