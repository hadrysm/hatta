import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export default Paragraph;
