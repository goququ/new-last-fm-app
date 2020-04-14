import React from "react";
import { Card } from "react-bootstrap";
import { StyledCard } from "./styled";

export interface Props {
  children?: any;
  title: string;
  subtitle: string;
  img: string;
}

const CustomCard = ({ children, title, subtitle, img }: Props) => {
  return (
    <StyledCard>
      <Card.Img variant="top" src={img || "https://via.placeholder.com/600"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{subtitle}</Card.Text>
        {children}
      </Card.Body>
    </StyledCard>
  );
};

export default CustomCard;
