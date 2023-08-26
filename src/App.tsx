import React, { useState } from "react";
import { useQuery } from "react-query";
import GlobalStyle from "./GlobalStyle";
import { fetchInfo } from "./api";
import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";

function App() {
  const { isLoading, data } = useQuery("bicycleInfo", fetchInfo);
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
