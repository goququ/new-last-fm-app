import React from "react";
import { Spinner } from "react-bootstrap";

import Card from "components/card";
import { Props as CardProps } from "components/card/Card";

import { StyledCol, StyledRow, SpinnerCol } from "./styled";

interface Props {
  items: CardProps[];
  isLoading: boolean;
  loadItems?: () => void;
}

const CardList = ({ items, isLoading }: Props) => {
  return (
    <StyledRow onScroll={() => console.log("alo")}>
      {items.map((item, index) => (
        <StyledCol md={4} key={index}>
          <Card {...item} />
        </StyledCol>
      ))}

      {isLoading && (
        <SpinnerCol md={12}>
          <Spinner animation="border" />
        </SpinnerCol>
      )}
    </StyledRow>
  );
};

export default CardList;
