import React from 'react';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import SEO from 'components/utilities/SEO/SEO';

const IndexPage = () => (
  <MainTemplate>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </MainTemplate>
);

export default IndexPage;
