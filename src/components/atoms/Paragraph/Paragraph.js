import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 1.2;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export default Paragraph;
