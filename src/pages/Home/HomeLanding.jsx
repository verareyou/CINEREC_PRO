import React from "react";
import img1 from "../assets/img1.jpg";
import { useState, useEffect } from "react";
import { motion, transform } from "framer-motion";

const HomeLanding = () => {
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
        .landing {
            background-image: url(${img1});
            background-size: cover;
            background-position: center;
            background-position-y: ${-scrollY * 0.5 - 500}px;
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-blend-mode: multiply;
            background-color: rgba(0, 0, 0, 0.5);
            height: 100vh;
            position: relative;
            z-index: -1;
        }
        @media (max-width: 1000px) {
            .landing {
                background-position-y: ${-scrollY * 0.5 - 200}px;
            }
        }
        @media (max-width: 768px) {
            .landing {
                background-position-y: ${-scrollY * 0.5 - 100}px;
            background-size: 110%;

            }
        }
        @media (max-width: 500px) {
            .landing {
                background-position-y: ${-scrollY * 0.5 - 50}px;
            background-size: 140%;
            }
        }
        `}
      </style>
      <motion.div
        
        className="landing animate-landing flex items-center overflow-hidden bg-black justify-center text-white "
      >
        <motion.div
          // animate={{
          //   scale: [2, 1],
          //   opacity: [0, 1],
          // }}
          // transition={{
          //   duration: 1,
          //   ease: "easeInOut",
          //   times: [0, 1],
          //   // delay: 0.5,
          // }}
          className="hero animate-scaling text-[10vw] font-bold "
        >
          Name it.
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeLanding;
