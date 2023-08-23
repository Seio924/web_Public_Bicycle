import { useQuery } from "react-query";
import GlobalStyle from "./GlobalStyle";
import { fetchInfo } from "./api";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const { isLoading, data } = useQuery("bicycleInfo", fetchInfo);
  console.log(data);
  return (
    <>
      <GlobalStyle />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
