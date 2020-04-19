import React from "react";
import { Spinner, Col } from "react-bootstrap";

import Card from "components/card";
import { Props as CardProps } from "components/card/Card";
import LoadMore from "components/load-more";

import { StyledCol, StyledRow, SpinnerCol } from "./styled";

interface Props {
  items: CardProps[];
  isLoading: boolean;
  loadMore?: () => void;
}

const CardList = ({ items, isLoading, loadMore }: Props) => {
  const onItems = !items.length && !isLoading;

  return (
    <>
      <StyledRow>
        {onItems && (
          <Col>
            <h2>Nothing was found :(</h2>
          </Col>
        )}
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
      {!isLoading && loadMore && <LoadMore action={loadMore} />}
    </>
  );
};

export default CardList;
