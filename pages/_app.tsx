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
