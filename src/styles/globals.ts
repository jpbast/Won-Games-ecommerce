import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    font-family: inherit;
    color: inherit;
    text-decoration: none;
  }
`
