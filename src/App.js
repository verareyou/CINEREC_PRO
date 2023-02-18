import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

function App() {

  // scroll to top on refresh
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App overflow-x-hidden ">
      <div className="filter pointer-events-none fixed h-full  w-full top-0 bottom-0 z-50 bg-[#ffffff08]"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
