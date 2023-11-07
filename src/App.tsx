import React, { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { themeState } from "./atoms";
import { useRecoilValue } from "recoil";

import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";

function App() {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </ThemeProvider>
  );
}

export default App;
