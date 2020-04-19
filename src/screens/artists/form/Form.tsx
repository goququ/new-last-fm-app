import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useLocation } from "react-router-dom";
import qs from "query-string";
import { Field } from "formik";

import { Input } from "components/form";

import { useFormActions } from "./hooks";

const ArtistsForm = () => {
  const location = useLocation();
  const { artist } = qs.parse(location.search);
  const { onSubmit } = useFormActions();

  console.log(process.env);

  return (
    <Formik onSubmit={onSubmit} initialValues={{ artist }}>
      <Form>
        <Row>
          <Col>
            <Field name="artist" placeholder="Artist" component={Input} />
          </Col>
          <Col md="auto">
            <Button type="submit" variant="success">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
};

export default ArtistsForm;
