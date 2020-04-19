import React from "react";
import { Col, Row, Button } from "react-bootstrap";

interface Props {
  action: () => void;
  text?: string;
}

const LoadMore = ({ text = "Load more", action }: Props) => {
  return (
    <Row>
      <Col>
        <Button block onClick={action}>
          {text}
        </Button>
      </Col>
    </Row>
  );
};

export default LoadMore;
