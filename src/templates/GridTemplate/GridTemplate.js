import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GridTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.section`
  margin: 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

GridTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GridTemplate;
