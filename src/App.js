import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Contact from "./pages/Contact/Contact";

function App() {

  return (
    <div className="App selection:bg-[#27354481] selection:text-[#000000] lg:cursor-none overflow-x-hidden ">
      <head>
      <meta name="description" content="CINEREC" />
      {/* <title>CINEREC</title> */}
        {/* <link rel="icon" href="/logo.png" /> */}
        <link rel="favicon" href="/logo.png" />
      </head>
      {/* <div className="filter pointer-events-none fixed h-full max-lg:hidden w-full top-0 bottom-0 z-50 bg-[#ffffff28]"></div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
