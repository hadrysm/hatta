import React from 'react';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';

const articlesHeadline = {
  title: 'articles',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const ArticlesPage = () => (
  <>
    <SEO title="Home" />
    <HeadlineContent title={articlesHeadline.title} paragraph={articlesHeadline.paragraph} />
  </>
);

export default ArticlesPage;
