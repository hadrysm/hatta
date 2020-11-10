import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import slugify from 'slugify';

import GridTemplate from 'templates/GridTemplate/GridTemplate';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';
import ArticleCard from 'components/molecules/ArticleCard/ArticleCard';

const articlesHeadline = {
  title: 'articles',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const ArticlesPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <HeadlineContent title={articlesHeadline.title} paragraph={articlesHeadline.paragraph} />
    <GridTemplate>
      {data.allDatoCmsArticle.nodes.map(({ title, image: { fluid } }) => (
        <ArticleCard
          key={title}
          fluid={fluid}
          title={title}
          slug={slugify(title, { lower: true })}
        />
      ))}
    </GridTemplate>
  </>
);

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        image {
          fluid(maxHeight: 900, maxWidth: 600) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
      }
    }
  }
`;

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    allDatoCmsArticle: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
      ),
    }),
  }).isRequired,
};

export default ArticlesPage;
