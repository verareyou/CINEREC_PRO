import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { RandomReveal } from "react-random-reveal";

const Nav = () => {
  // const Navigate = useNavigate();
  // mobile nav
  const [navOpen, setNavOpen] = useState(false);
  

  const toggleNav = () => {
      setNavOpen(!navOpen);

  };



  const currentroute = window.location.pathname;
  // console.log(currentroute);

  const color = () => {
    if (currentroute === "/") {
      return "text-[white]";
    } else {
      return "text-[black]";
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
      className=" Nav overflow-hidden flex flex-row w-full py-12 max-sm:py-4 max-sm:px-8 px-24 z-[90] text-white items-center justify-between absolute "
    >
      <Link to="/" className={`Link cursor-pointer logo font-bold ${color()} `}>
        CINEREC
        <span className="text-[red]  ">.</span>
      </Link>
      <div
        className={`navlink font-light max-md:hidden flex basis-2 flex-row text-[#4d4d4d] items-center justify-center `}
      >
        <Link className=" duration-200 hover:text-[white] invert " to="/">
          Home
        </Link>
        <Link className="mx-4 duration-200 hover:text-[#ffffff] invert ">
          Contact
        </Link>
        <Link className=" duration-200 hover:text-[white] invert " to="/about">
          About
        </Link>
      </div>
      {/* mobile nav */}
      <div
        className="hamburger md:hidden flex flex-col justify-between w-8 cursor-pointer "
        onClick={() => {
          toggleNav();
          } }
      >
        <div className="hamburger-line w-full h-[2px] bg-[#c8c8c8] "></div>
        <div className="hamburger-line w-full h-[2px] my-[2px] bg-[#c8c8c8] "></div>
        <div className="hamburger-line w-full h-[2px] bg-[#c8c8c8] "></div>
      </div>

      {/* mobile nav */}

      <div
        className={`mobile-nav flex flex-col justify-center items-center w-full h-[100vh] bg-[#1a22299c] backdrop-blur-[5px] fixed top-0 left-0 z-[10] duration-50 
        // ${navOpen ? "translate-x-0 blur-0 " : "translate-x-[120%] "}
        `}
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
            className="hamburger flex absolute right-12 max-sm:right-8 max-sm:top-8 top-10 flex-col justify-between w-8 cursor-pointer "
            onClick={toggleNav}
          >
            <CloseIcon />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
