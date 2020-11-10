import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/utilities/SEO/SEO';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

const IndexPage = ({ data }) => (
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
    <StyledImg fluid={data.file.childImageSharp.fluid} />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 4.5rem 3rem 0;
  text-align: center;

  ${({ theme }) => theme.mq.bigTablet} {
    align-items: flex-end;
    text-align: right;
    width: 60%;
    height: calc(100vh - 80px);
    margin: 0;
    padding: 0 3.4rem;

    p {
      width: 60%;
    }
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
    margin: 2rem auto;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    position: absolute !important;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40%;
    margin: 0;
  }
`;

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),
    }),
  }).isRequired,
};

export default IndexPage;
