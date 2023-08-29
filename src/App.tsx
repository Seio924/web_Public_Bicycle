import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";

import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
