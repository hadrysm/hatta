import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import styled from 'styled-components';

import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

import { splitTextToChars } from 'helpers';

const HeadlineContent = ({ title, paragraph }) => {
  const container = useRef(null);

  useEffect(() => {
    const [header, text] = container.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from([splitTextToChars(header), text], {
      duration: 0.4,
      delay: 1,
      autoAlpha: 0,
      y: -60,
      stagger: 0.1,
    });
  }, [container]);

  return (
    <Wrapper ref={container}>
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
