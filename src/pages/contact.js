import React from 'react';

import SEO from 'components/utilities/SEO/SEO';
import HeadlineContent from 'components/molecules/HeadlineContent/HeadlineContent';
import Input from 'components/atoms/Input/Input';

const concactHeadline = {
  title: 'concact',
  paragraph:
    'While artists work from real to the abstract, architects must work from the abstract to the real. ',
};

const ContactPage = () => (
  <>
    <SEO title="Home" />
    <HeadlineContent title={concactHeadline.title} paragraph={concactHeadline.paragraph} />
    <Input type="text" name="name" label="name" value="Adam" onChange={() => {}} />
    <Input type="email" name="email" label="e-mail" value="adam@gmail.com" onChange={() => {}} />
    <Input
      as="textarea"
      type="text"
      name="message"
      label="message"
      value="PM me"
      onChange={() => {}}
    />
  </>
);

export default ContactPage;
