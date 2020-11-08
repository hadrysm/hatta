import React from 'react';
import PropTypes from 'prop-types';

import GlobalStyled from 'assets/styles/GlobalStyles';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyled />
      {children}
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MainTemplate;
