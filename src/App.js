import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";

function App() {

  return (
    <div className="App lg:cursor-none overflow-x-hidden ">
      <div className="filter pointer-events-none fixed h-full  w-full top-0 bottom-0 z-50 bg-[#ffffff28]"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
