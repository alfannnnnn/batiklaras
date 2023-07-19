import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DiscountAll from "./pages/DiscountAll";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/batiklaras" Component={Homepage} />
        <Route path="/batiklaras/diskon" Component={DiscountAll} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
