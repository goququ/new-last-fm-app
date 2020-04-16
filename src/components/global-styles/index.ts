import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /* html, body, #root {
    height: 100%;
  } */

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
  }

  @keyframes spinner-border {
    to { transform: rotate(360deg); }
  }

  .spinner-border {
    display: inline-block;
    width: 36px;
    height: 36px;
    vertical-align: text-bottom;
    border: 4px solid black;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border 1s linear infinite;
  }
`;
