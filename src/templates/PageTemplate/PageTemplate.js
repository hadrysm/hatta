import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from 'components/organisms/Navigation/Navigation';

const PageTemplate = ({ children }) => {
  const container = useRef(null);

  useEffect(() => {
    container.current.style.visibility = 'visible';
  }, []);

  return (
    <Wrapper ref={container}>
      <Navigation />
      <MainContent>{children}</MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  min-height: 100vh;
  padding: 0 1rem 0 1rem;
  margin: 0 auto;
  position: static;
  overflow: hidden;
  visibility: hidden;

  ${({ theme }) => theme.mq.bigTablet} {
    padding: 1rem 8.4rem;
  }
`;

const MainContent = styled.main`
  padding-top: 5rem;
`;

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default PageTemplate;
