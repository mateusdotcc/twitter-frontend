import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

import { COLORS } from 'styles/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${COLORS.secondary};
    background-color: ${COLORS.background};

    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
  }

  ::selection {
    background-color: ${lighten(0.2, COLORS.onPrimary)};
  }

  button {
    border: 0;
    user-select: none;
    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
    user-select: none;
  }

  input[type=text] {
    background-color: ${COLORS.tertiary};

    flex: 1;
    padding: 0 2.5rem;
    min-height: 55px;
    height: 5.5rem;
    font-size: 2rem;
    border-radius: 1.5rem;
    border: 0;

    ::placeholder {
      color: ${lighten(0.3, COLORS.onSecondary)};
    }
  }
`;
