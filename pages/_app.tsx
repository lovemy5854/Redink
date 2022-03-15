import React, { FC } from 'react';

import { Global, css } from '@emotion/react';

const GlobalStyle = css`
  html,
  body {
    height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
  }
  body > div {
    height: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  h1 {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
`;

const App: FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
