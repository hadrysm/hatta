import styled from 'styled-components';

const Logo = styled.span`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export default Logo;
