import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
     font-family: brondby;
     src: url(./fonts/brondby.otf);
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #18191A;
    color: #E9E9E9;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px brondby, sans-serif;
  }

  #root {
    display: flex;
    padding: 50px;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #E9E9E9;
  }
`;
