import React from 'react';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';
import ContactForm from 'components/organisms/ContactForm/ContactForm';

const concactHeadline = {
  title: 'concact',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const ContactPage = () => (
  <>
    <SEO title="Home" />
    <HeadlineContent title={concactHeadline.title} paragraph={concactHeadline.paragraph} />
    <ContactForm />
  </>
);

export default ContactPage;
