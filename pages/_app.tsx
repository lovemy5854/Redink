import React, { FC } from 'react';

const App: FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  return (
    <div className="App">
      <Component {...pageProps} />
    </div>
  );
};

export default App;
