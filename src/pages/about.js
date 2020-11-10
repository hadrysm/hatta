import React from 'react';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';

const aboutHeadline = {
  title: 'about',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const AboutPage = () => (
  <>
    <SEO title="Home" />
    <HeadlineContent title={aboutHeadline.title} paragraph={aboutHeadline.paragraph} />
  </>
);

export default AboutPage;
