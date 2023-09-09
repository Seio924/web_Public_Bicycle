import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Detail from "./pages/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:locationName/*" element={<Info />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
