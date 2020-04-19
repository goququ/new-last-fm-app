import styled from "styled-components";
import { Col, Row } from "react-bootstrap";

export const StyledCol = styled(Col)`
  display: flex;
`;

export const StyledRow = styled(Row)`
  overflow-y: scroll;
  flex: 1;
`;

export const SpinnerCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;
