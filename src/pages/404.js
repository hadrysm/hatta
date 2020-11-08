import React from 'react';

import SEO from 'components/seo';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const NotFoundPage = () => (
  <MainTemplate>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </MainTemplate>
);

export default NotFoundPage;
