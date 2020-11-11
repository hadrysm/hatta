import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Input = ({ type, name, tag, label, value, maxLength, ...props }) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput type={type} as={tag} name={name} id={name} value={value} {...props} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 100%;
  margin: 1.2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledInput = styled.input`
  max-width: 30rem;
  width: 100%;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.black};

  ${({ as }) =>
    as === 'textarea' &&
    css`
      min-height: 20rem;
      max-width: 60rem;
      resize: none;
    `}
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 1rem;
  padding: 0.5rem 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

Input.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  tag: 'input',
  type: 'text',
  value: '',
  maxLength: 200,
};

export default Input;
