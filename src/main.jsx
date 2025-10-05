import { createRoot } from "react-dom/client";
import Home from "./Home";
import { HashRouter, Routes, Route } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/*" element={<Home />}></Route>
    </Routes>
  </HashRouter>
);
