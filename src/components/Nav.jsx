import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

export const Nav = () => {
  // mobile nav
  const [navOpen, setNavOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = React.useRef();
  useEffect(() => {
    setNavHeight(navRef.current.getBoundingClientRect().height);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const currentroute = window.location.pathname;
  // console.log(currentroute);

  const color = () => {
    if (currentroute === "/about") {
      return "text-[black]";
    } else {
      return "text-[white]";
    }
  };


  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 1],
      }}
      className=" Nav overflow-hidden flex flex-row w-full py-12 max-sm:py-4 max-sm:px-8 px-16 z-[10] text-white items-center justify-between absolute "
    >
      <div className={`logo font-bold ${color()} `}>Name it.</div>
      <div className={`navlink font-light max-md:hidden flex basis-2 flex-row text-[#989898] items-center justify-center `} >
        <Link className=" duration-200 hover:text-[white] " to="/">
          Home
        </Link>
        <Link className="mx-4 duration-200 hover:text-[white] ">Contact</Link>
        <Link className=" duration-200 hover:text-[white] " to="/about">
          About
        </Link>
      </div>
      <div
        className="hamburger md:hidden flex flex-col justify-between w-8 cursor-pointer "
        onClick={toggleNav}
      >
        <div className="hamburger-line w-full h-[2px] bg-[#c8c8c8] "></div>
        <div className="hamburger-line w-full h-[2px] my-[2px] bg-[#c8c8c8] "></div>
        <div className="hamburger-line w-full h-[2px] bg-[#c8c8c8] "></div>
      </div>

      {/* mobile nav */}
      <div
        className={`mobile-nav flex flex-col justify-center items-center w-full h-[100vh] bg-[#000000b4] backdrop-blur-sm fixed top-0 left-0 z-[10] duration-200 ${
          navOpen ? "translate-x-0 blur-0 " : "translate-x-[120%] blur-[10px]"
        }`}
        ref={navRef}
      >
        <div className="mobile-nav-link flex flex-col justify-center items-center w-full h-full ">
          <Link className=" duration-200 hover:text-[white] " to="/">
            Home
          </Link>
          <Link className="mx-4 duration-200 hover:text-[white] ">Contact</Link>
          <Link className=" duration-200 hover:text-[white] " to="/about">
            About
          </Link>
          <div
            className="hamburger flex absolute right-8 top-8 flex-col justify-between w-8 cursor-pointer "
            onClick={toggleNav}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
