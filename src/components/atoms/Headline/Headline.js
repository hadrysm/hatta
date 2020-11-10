import styled, { css } from 'styled-components';

const Headline = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${({ theme }) => theme.font.size.l};

      ${({ theme }) => theme.mq.bigTablet} {
        font-size: ${({ theme }) => theme.font.size.xl};
      }
    `}
`;

export default Headline;
