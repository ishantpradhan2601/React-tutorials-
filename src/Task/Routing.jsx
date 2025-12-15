import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
