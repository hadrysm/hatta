import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

import { exitAnimation, enterAnimation } from 'animations';

const PageTransitionProviders = ({ children, to, ...props }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <TransitionLink
      {...props}
      style={{ display: 'block' }}
      to={to}
      exit={{
        trigger: ({ exit, node }) => exitAnimation(colors.primary, exit, node),
        length: 0.5,
      }}
      entry={{
        delay: 0.5,
        trigger: ({ exit, node }) => enterAnimation(colors.primary, exit, node),
      }}
    >
      {children}
    </TransitionLink>
  );
};

PageTransitionProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
};

export default PageTransitionProviders;
