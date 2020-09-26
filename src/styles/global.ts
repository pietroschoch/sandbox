import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
     font-family: brondby;
     font-weight: 400;
     src: url(./fonts/Brondby.otf);
  }

  @font-face {
     font-family: brondby;
     font-weight: 500;
     src: url(./fonts/Brondby-Medium.otf);
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

  span {
      line-height: initial;
  }

  body, input, button {
    font: 17px brondby, sans-serif;
  }

  #root {
    display: flex;
    padding: 50px;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;

    @media only screen and (max-width: 771px) {
      flex-direction: column;
    }
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #E9E9E9;
  }
`;
