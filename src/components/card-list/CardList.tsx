import React from "react";
import { Row } from "react-bootstrap";

import Card from "components/card";
import { Props as CardProps } from "components/card/Card";
import { StyledCol } from "./styled";

interface Props {
  items: CardProps[];
}

const CardList = ({ items }: Props) => {
  return (
    <Row>
      {items.map((item, index) => (
        <StyledCol md={4} key={index}>
          <Card {...item} />
        </StyledCol>
      ))}
    </Row>
  );
};

export default CardList;
