import React from "react";

import { Form } from "react-bootstrap";
import { FieldProps } from "formik";

type Props = FieldProps & {
  error?: string;
  label?: string;
  name: string;
  placeholder: string;
};

const Input = ({ label, error, field, form, ...rest }: Props) => {
  return (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        {...rest}
        {...field}
        value={field.value}
        isInvalid={!!error}
      />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </>
  );
};

export default Input;
