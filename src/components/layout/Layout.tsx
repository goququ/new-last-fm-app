import React from "react";

import Header from "./header";
import { ContentCol, StyledContainer, ContentRow } from "./styled";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <StyledContainer fluid>
      <Header />
      <ContentRow>
        <ContentCol>{children}</ContentCol>
      </ContentRow>
    </StyledContainer>
  );
};

export default Layout;
