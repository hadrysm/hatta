import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import routes from 'routes';

import Headline from 'components/atoms/Headline/Headline';

const ArticleCard = ({ fluid, title, slug }) => (
  <Wrapper to={`${routes.articles}/${slug}`}>
    <StyledImg fluid={fluid} />
    <InnerWrapper>
      <StyledHeadlie>{title}</StyledHeadlie>
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = styled(Link)`
  width: 100%;
  height: 28rem;
  position: relative;
`;

const InnerWrapper = styled.div`
  position: absolute;
  top: 1.7rem;
  left: 0;
  width: 80%;
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.black};
`;

const StyledImg = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledHeadlie = styled(Headline)`
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.colors.white};
`;

ArticleCard.propTypes = {
  fluid: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ArticleCard;
