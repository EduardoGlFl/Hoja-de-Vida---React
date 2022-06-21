import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: #d8dad8;
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
  }
  a{
    text-decoration: none;
  }
`;



export default GlobalStyles;