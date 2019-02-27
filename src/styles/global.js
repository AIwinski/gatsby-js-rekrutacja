import { createGlobalStyle } from 'styled-components';
import {colors} from './variables';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:500,700');

  html, body {
    width: 100%;
    margin: 0;
    background: ${colors.white_secondary};
    font-family: 'Montserrat', sans-serif;
  }

  * {
      margin: 0;
      padding: 0;
  }
  
  input,
  textarea,
  button {
    font: inherit;
  }
  
  img {
    vertical-align: middle;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;
