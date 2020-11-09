import styled from 'styled-components';

const Button = styled.button`
  min-width: 15rem;
  min-height: 3.5rem;
  padding: 1rem 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.size.xxs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  outline: none;
`;

export default Button;
