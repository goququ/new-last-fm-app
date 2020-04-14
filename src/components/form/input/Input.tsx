import React from "react";

import { Form } from "react-bootstrap";

interface Props {
  error?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

const Input = ({ label, error, ...rest }: Props) => {
  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...rest} isInvalid={!!error} />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </>
  );
};

export default Input;
