import React from 'react';
import PropTypes from 'prop-types';
// import gsap from 'gsap';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import GridTemplate from 'templates/GridTemplate/GridTemplate';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';
import { useGsapAnimation } from 'hooks/useGsapAnimation';

const galleryHeadline = {
  title: 'gallery',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const GalleryPage = ({
  data: {
    allFile: { edges },
  },
}) => {
  const ref = useGsapAnimation();

  return (
    <>
      <SEO title="Gallery" />
      <HeadlineContent title={galleryHeadline.title} paragraph={galleryHeadline.paragraph} />
      <GridTemplate ref={ref}>
        {edges.map(({ node: { id, childImageSharp } }) => (
          <Img key={id} fluid={childImageSharp.fluid} />
        ))}
      </GridTemplate>
    </>
  );
};

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 900, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`;

GalleryPage.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          childImageSharp: PropTypes.shape({
            fluid: PropTypes.oneOfType([
              PropTypes.shape({}),
              PropTypes.arrayOf(PropTypes.shape({})),
            ]),
          }),
        }),
      ),
    }),
  }).isRequired,
};

export default GalleryPage;
