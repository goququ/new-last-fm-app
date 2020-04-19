import React from "react";
import { Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { Field } from "formik";

import { Input } from "components/form";

import { useFormActions } from "./hooks";
import { FormRow, InputCol, ButtonCol } from "./styled";

const ArtistsForm = () => {
  const location = useLocation();
  const { artist } = qs.parse(location.search);
  const { onSubmit } = useFormActions();

  return (
    <Formik onSubmit={onSubmit} initialValues={{ artist }}>
      <Form>
        <FormRow>
          <InputCol>
            <Field name="artist" placeholder="Artist" component={Input} />
          </InputCol>
          <ButtonCol>
            <Button type="submit" variant="success">
              Search
            </Button>
          </ButtonCol>
        </FormRow>
      </Form>
    </Formik>
  );
};

export default ArtistsForm;
