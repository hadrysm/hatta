import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'components/utilities/SEO/SEO';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import Button from 'components/atoms/Button/Button';

const IndexPage = ({ data }) => {
  const container = useRef(null);
  const imageContainer = useRef(null);

  useEffect(() => {
    const elements = container.current.children;
    const [image] = imageContainer.current.children;

    gsap.set(image.children, { transformOrigin: 'center' });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(elements, {
      duration: 1,
      delay: 1,
      y: -60,
      autoAlpha: 0,
      stagger: 0.15,
    })
      .from(image, { duration: 1.2, y: -1280 }, '-=1')
      .from(image.children, { duration: 1.3, scale: 1.4 }, '-=0.8');
  }, [container, imageContainer]);

  return (
    <>
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
        <Inner>
          <StyledImg fluid={data.file.childImageSharp.fluid} />
        </Inner>
      </ImageWrapper>
    </>
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

const Inner = styled.div`
  height: 100%;
  width: 100%;
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
