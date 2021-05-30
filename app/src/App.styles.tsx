import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #0073c2;
    --orange: #ffa434;
    --darkOrange: #ec8505;
    --lightBlue: #009ad6;
    --lightGray: #e6e7f0;
    --darkGray: #767676;
    --green: #00ad3f;
    --darkGreen: #028632
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }
  body {
    font-family: 'Cabin', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--darkGray);
  }

  button, a {
    text-decoration: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export {
  GlobalStyle,
}