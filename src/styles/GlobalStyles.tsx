import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Epilogue', sans-serif;
  }

  body {
    margin: 0;
    font-family: 'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: unset;
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 10px;
}

*::-webkit-scrollbar-track {
    background-color: transparent;
}

*::-webkit-scrollbar-thumb {
    background: rgba(240, 215, 240, 0.9);
    border-radius: 8px;
    cursor: pointer;
}

*::-webkit-scrollbar-thumb:hover {
    background: rgba(229, 199, 229, 1);
}
  
`

