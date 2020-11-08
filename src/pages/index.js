import React from 'react';

import MainTemplate from 'src/templates/MainTemplate/MainTemplate';
import SEO from 'src/components/seo';

const IndexPage = () => (
  <MainTemplate>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </MainTemplate>
);

export default IndexPage;
