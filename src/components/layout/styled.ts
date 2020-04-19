import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContentCol = styled(Col)`
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
`;

export const ContentRow = styled(Row)`
  flex: 1;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 14px;
`;
