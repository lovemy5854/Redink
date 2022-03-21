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
  h1,
  p {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
  }
  button {
    background: none;
    border: 0;
  }
  a {
    color: #2a323e;
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
