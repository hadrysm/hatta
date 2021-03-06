import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';

import { fadeInUpStagger } from 'animations';

// import { useGsapAnimation } from 'hooks/useGsapAnimation';

const ContactForm = () => {
  const container = useRef(null);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validate: ({ name, email, message }) => {
      const errors = {};
      if (!name) {
        errors.email = 'Required';
      }
      if (!email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = 'Invalid email address';
      }
      if (!message) {
        errors.message = 'Required';
      }

      return errors;
    },
    onSubmit: data => {
      console.log(data);
    },
  });

  useEffect(() => {
    const elements = container.current.children;

    fadeInUpStagger(elements);
  }, [container]);

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} ref={container}>
        <Input name="name" label="name" value={values.name} onChange={handleChange} />
        <Input
          type="email"
          name="email"
          label="e-mail"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          name="message"
          label="message"
          value={values.message}
          onChange={handleChange}
          as="textarea"
        />
        <Button type="submit">send message</Button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 2rem;
  overflow: hidden;
`;

export default ContactForm;
