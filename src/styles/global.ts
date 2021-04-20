import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    body {
      background: ${theme.colors.gray50};
    }

    body,
    input,
    textarea,
    button {
      font: 500 ${theme.font.sizes.small} Inter, san-serif;
      color: ${theme.colors.gray500};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
      font-family: Lexend, sans-serif;
      color: ${theme.colors.gray800};
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.large};
    }

    button {
      cursor: pointer;
    }
  `}

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

`;

export default GlobalStyles;
