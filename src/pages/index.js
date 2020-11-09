import React from 'react';
import styled from 'styled-components';

import SEO from 'components/utilities/SEO/SEO';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ContentWrapper>
      <Headline isBig>
        Your new <br /> space
      </Headline>
      <Paragraph>
        While artists work from real to the abstract, architects must work from the abstract to the
        real.
      </Paragraph>
      <Button>estimate project</Button>
    </ContentWrapper>
  </>
);

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500;
  align-items: center;
  padding: 4.5rem 3rem 0;
  justify-content: center;
  text-align: center;
`;

export default IndexPage;
