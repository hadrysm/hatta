import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const aboutHeadline = {
  title: 'about',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const AboutPage = ({ data }) => {
  const container = useRef(null);

  useEffect(() => {
    const wrapper = container.current;
    const elements = container.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 1 } });

    gsap.set(wrapper, { scaleX: 0, transformOrigin: 'left' });

    tl.to(wrapper, { duration: 1.5, scaleX: 1 }).fromTo(
      elements,
      {
        autoAlpha: 0,
        y: -60,
      },
      { duration: 1, autoAlpha: 1, y: 0, stagger: 0.15 },
      '-=1.5',
    );
  }, [container]);

  return (
    <Wrapper>
      <SEO title="About" />
      <div>
        <HeadlineContent title={aboutHeadline.title} paragraph={aboutHeadline.paragraph} />
        <AboutSection ref={container}>
          <Paragraph>
            Architectural design is primarily driven by the holistically creative manipulation of
            mass, space, volume, texture, light, shadow, materials, program, and Realistic elements
            such as cost, construction and technology, in order to achieve an end which is
            aesthetic, functional and often artistic. This distinguishes Architecture from
            engineering design, which is usually driven primarily by the creative application of
            mathematical and scientific principles.
          </Paragraph>
          <StyledHeadline>Abigail Donutdough</StyledHeadline>
        </AboutSection>
      </div>
      <ImageWrapper>
        <StyledImg fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
    </Wrapper>
  );
};

export const query = graphql`
  {
    file(name: { eq: "person" }) {
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
  justify-content: flex-start;
  align-items: center;

  ${({ theme }) => theme.mq.bigTablet} {
    flex-direction: row;
  }
`;

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 80rem;
  padding: 2rem 0.5rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 2rem 0;
  }

  ::after,
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
  }

  ::after {
    top: 0;
  }

  ::before {
    bottom: 0;
  }
`;

const StyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.font.size.m};
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  overflow: hidden;

  ${({ theme }) => theme.mq.bigTablet} {
    margin: auto 0 auto 3rem;
  }
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

AboutPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),
    }),
  }).isRequired,
};

export default AboutPage;
