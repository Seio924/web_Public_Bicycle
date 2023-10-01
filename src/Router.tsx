import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Detail from "./pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Info/:locationName" element={<Info />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
