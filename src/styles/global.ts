import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    h1,
    button,
    a {
      font-weight: normal;
    }
    button {
      span {
      }
    }
    span,
    p,
    label,
    input {
    }
    button {
      border-radius: 10px;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
    }
    a {
      text-decoration: none;
    }
  `}
`;
