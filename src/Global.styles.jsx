import { createGlobalStyle } from "styled-components";

import colors from "./config/colors";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-family: sans-serif;
    color: ${colors.darkGray};
    background-color: ${colors.white};
  }
  img {
    max-width: 100%;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }
`;

export default GlobalStyles;
