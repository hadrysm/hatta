import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/utilities/SEO/SEO';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import Button from 'components/atoms/Button/Button';

import { staggerRevealHome } from 'animations';

const IndexPage = ({ data }) => {
  const container = useRef(null);
  const imageContainer = useRef(null);

  useEffect(() => {
    const contentElements = container.current.children;
    const [image] = imageContainer.current.children;

    staggerRevealHome([contentElements, image]);
  }, [container, imageContainer]);

  return (
    <Wrapper>
      <SEO title="Home" />
      <ContentWrapper ref={container}>
        <Headline isBig>
          Your new <br /> space
        </Headline>
        <Paragraph>
          While artists work from real to the abstract, architects must work from the abstract to
          the real.
        </Paragraph>
        <Button>estimate project</Button>
      </ContentWrapper>
      <ImageWrapper ref={imageContainer}>
        <StyledImg fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
    </Wrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    flex-direction: row;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 2rem;
  overflow: hidden;

  ${({ theme }) => theme.mq.tablet} {
    width: 80%;
    max-width: 40rem;
    margin: 2rem auto;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 40%;
    margin: 0;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
