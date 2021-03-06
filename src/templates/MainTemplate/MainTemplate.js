import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import PageTemplate from 'templates/PageTemplate/PageTemplate';

import GlobalStyled from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/mainTheme';
import NavigationStateProvider from 'providers/NavigationStateProvider';

const MainTemplate = ({ children, location }) => {
  return (
    <NavigationStateProvider location={location}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <PageTemplate>{children}</PageTemplate>
      </ThemeProvider>
    </NavigationStateProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  location: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    .isRequired,
};

export default MainTemplate;
