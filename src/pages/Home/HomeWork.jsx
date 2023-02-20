import React, { useState, useEffect } from "react";
import img from "../assets/img5.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { RandomReveal } from "react-random-reveal";

const HomeWork = () => {
  const Navigate = useNavigate();
  // parallax background
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <>
      <style>
        {`
            .work {
            // background-image: url(${img});
            background-size: cover;
            background-position: center;
            background-position-y: ${-scrollY * 0.5 - 300}px;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-blend-mode: multiply;
            background-color: rgba(0, 0, 0, 0.5);
            height: 80vh;
            position: relative;
            z-index: 1;
            }
            @media (max-width: 1000px) {
              .work {
                  background-position-y: ${-scrollY * 0.5 + 200}px;
              }
          }
          @media (max-width: 768px) {
              .work {
                  background-position-y: ${-scrollY * 0.5 + 200}px;
              background-size: 110%;
  
              }
          }
          @media (max-width: 500px) {
              .work {
                  background-position-y: ${-scrollY * 0.5 + 250}px;
              background-size: 140%;
              }
          }
            `}
      </style>

      <div className="work text-white flex items-center justify-center ">
        <motion.span
          whileInView={{
            opacity: [0, 1],
            // contentVisibility: ["hidden", "visible"],
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
            times: [0, 1],
          }}
          className="hero text-5xl flex flex-row items-center w-full justify-between mx-10 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80 "
          >
            Work
          <Link
            to="/work"
            className=" cursor-pointer text-[#b3b3b3] duration-150 hover:text-[white] text-lg font-thin "
          >
          See my work
          </Link>
        </motion.span>
      </div>
    </>
  );
};

export default HomeWork;
