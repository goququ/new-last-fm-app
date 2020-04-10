import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./header";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
