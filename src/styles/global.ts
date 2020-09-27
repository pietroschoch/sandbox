import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

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
    font: 15px Mulish, sans-serif;
    font-weight: 300;
  }

  #root {
    display: flex;
    padding: 50px;
    height: 100vh;
    max-width: 1280px;
    margin: 0 auto;

    @media only screen and (max-width: 771px) {
      flex-direction: column;
      padding: 30px;
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
