import React from 'react';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import SEO from 'components/seo';

const ArticlesPage = () => (
  <MainTemplate>
    <SEO title="Home" />
    <h1>Hi articles</h1>
  </MainTemplate>
);

export default ArticlesPage;
