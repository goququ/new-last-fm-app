import React from "react";
import { Row } from "react-bootstrap";

import Header from "./header";
import { ContentCol, StyledContainer } from "./styled";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <StyledContainer fluid>
      <Header />
      <Row>
        <ContentCol>{children}</ContentCol>
      </Row>
    </StyledContainer>
  );
};

export default Layout;
