import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import { fadeInUpStagger } from 'animations';

const ArticlePostTemplate = ({
  data: {
    datoCmsArticle: { title, author, articleContent, image },
  },
}) => {
  const container = useRef(null);

  useEffect(() => {
    const elements = container.current.children;

    fadeInUpStagger(elements);
  }, [container, fadeInUpStagger]);

  return (
    <>
      <Header>
        <StyledImg fluid={image.fluid} />
        <Headline>{title}</Headline>
        <Author>{author}</Author>
      </Header>

      <Content ref={container}>
        {articleContent.map(item => {
          const itemKey = Object.keys(item).pop();
          switch (itemKey) {
            case 'paragraphContent':
              return <Paragraph key={item.id}>{item[itemKey]}</Paragraph>;
            case 'headingContent':
              return <StyleHeadline key={item.id}>{item[itemKey]}</StyleHeadline>;
            case 'imageData':
              return <StyledImgContent key={item.id} fluid={item[itemKey].fluid} />;
            default:
              return null;
          }
        })}
      </Content>
    </>
  );
};

export const query = graphql`
  query MyQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      image {
        fluid(maxWidth: 600) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      articleContent {
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
        ... on DatoCmsHeading {
          id
          headingContent
        }
        ... on DatoCmsArticleImage {
          id
          imageData {
            fluid(maxWidth: 600) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 30vh;
  padding: 0 1rem;
  margin-top: 3rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.white};
`;

const StyledImg = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Author = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const StyleHeadline = styled(Headline)`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.font.size.s};
`;

const StyledImgContent = styled(Img)`
  width: 80%;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  overflow: hidden;
`;

ArticlePostTemplate.propTypes = {
  data: PropTypes.shape({
    datoCmsArticle: PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.arrayOf(PropTypes.shape({}))]),
      }),

      articleContent: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};

export default ArticlePostTemplate;
