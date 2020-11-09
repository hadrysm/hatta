import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from 'components/organisms/Navigation/Navigation';

const PageTemplate = ({ children }) => (
  <Wrapper>
    <Navigation />
    <main>{children}</main>
  </Wrapper>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Wrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxContainerWidth};
  min-height: 100vh;
  padding: 1rem;
  margin: 0 auto;
`;

export default PageTemplate;
