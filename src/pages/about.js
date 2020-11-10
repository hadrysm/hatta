import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const AboutPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <HeadlineContent title={aboutHeadline.title} paragraph={aboutHeadline.paragraph} />
    <AboutSection>
      <Paragraph>
        Architectural design is primarily driven by the holistically creative manipulation of mass,
        space, volume, texture, light, shadow, materials, program, and Realistic elements such as
        cost, construction and technology, in order to achieve an end which is aesthetic, functional
        and often artistic. This distinguishes Architecture from engineering design, which is
        usually driven primarily by the creative application of mathematical and scientific
        principles.
      </Paragraph>
      <StyledHeadline>Abigail Donutdough</StyledHeadline>
    </AboutSection>
    <StyledImg fluid={data.file.childImageSharp.fluid} />
  </>
);

export const query = graphql`
  {
    file(name: { eq: "person" }) {
      childImageSharp {
        fluid(maxWidth: 1200, maxHeight: 1600, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const AboutSection = styled.section`
  position: relative;
  width: 100%;
  padding: 2rem 0.5rem;
  margin-bottom: 3.8rem;

  ${({ theme }) => theme.mq.bigTablet} {
    width: 40%;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100vw;
    height: 4px;
    top: 0;
    left: -10%;
    background-color: ${({ theme }) => theme.colors.black};
  }

  ::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: 3px;
    bottom: 0;
    left: -10%;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

const StyledHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.font.size.m};
`;

const StyledImg = styled(Img)`
  margin: 0 3rem 1rem;

  ${({ theme }) => theme.mq.bigTablet} {
    position: absolute !important;
    width: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }
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
