import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;

const MainTemplate = ({ children }) => (
  <>
    <Helmet>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <title>Tulowiecka</title>
      <meta name="description" content="Nested component" />
    </Helmet>
    <GlobalStyle />
    {children}
  </>
);

export default MainTemplate;
