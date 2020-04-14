import React from "react";
import { Row, Col, Button } from "react-bootstrap";

import { Input } from "components/form";

const AlbumsForm = () => {
  return (
    <Row>
      <Col>
        <Input name="artist" placeholder="Artist" />
      </Col>
      <Col>
        <Input name="album" placeholder="Album" />
      </Col>
      <Col md="auto">
        <Button type="submit" variant="success">
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default AlbumsForm;
