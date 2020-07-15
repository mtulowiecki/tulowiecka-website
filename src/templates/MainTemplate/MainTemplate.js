import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import 'normalize.css';
import { colors, media, typography } from 'utils';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 16px;
}

${({ theme: { media } }) => media.mobileS`
  html {
      font-size: calc(16px + 4 * ((100vw - 320px) / 680));
    }
`}

${({ theme: { media } }) => media.desktop`
  html {
      font-size: 20px;
    }
`}

body {
  font-family: "Open Sans", sans-serif;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  background-color: ${colors.light};
  color: ${colors.dark};
}

#___gatsby {
  overflow: hidden;
}
`;

const MainTemplate = ({ children }) => (
  <>
    <Helmet>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>Tulowiecka</title>
      <meta name="description" content="Nested component" />
      <link
        href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@800&family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={{ ...colors, ...typography, media }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  </>
);

export default MainTemplate;
