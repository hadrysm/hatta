import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const HeadlineContent = ({ title, paragraph }) => {
  return (
    <Wrapper>
      <Headline>{title}</Headline>
      <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto 3rem;
  text-align: center;
  max-width: 40rem;

  ${({ theme }) => theme.mq.bigTablet} {
    text-align: left;
    margin: 5.5rem 0 4rem;
  }
`;

HeadlineContent.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default HeadlineContent;
