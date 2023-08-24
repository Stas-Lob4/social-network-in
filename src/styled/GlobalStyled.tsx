import {createGlobalStyle} from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: white;
    font-family: 'Inknut Antiqua', serif,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a{
    text-decoration: none;
  }

  a:hover {
    text-decoration-line: underline;
  }

  ul{
    list-style: none;
  }
`