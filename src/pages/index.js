import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/utilities/SEO/SEO';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

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
      <ImgWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImgWrapper>
    </ContentWrapper>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),
    }),
  }).isRequired,
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 4.5rem 3rem 0;
  text-align: center;
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
`;

export default IndexPage;
