import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
    className="h-[40vh] bg-transparent flex flex-col items-center justify-center ">
      <motion.div
    whileInView={{
        opacity: [0, 1],
    }}
    transition={{
        duration: 0.7,
        ease: "easeInOut",
        times: [0, 1],
    }}
      
      className="follow text-5xl font-thin ">Follow</motion.div>
      <motion.div
    whileInView={{
        opacity: [0, 1],
    }}
    transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0, 1],
    }}
       className="social mt-4 flex flex-row duration-150 hover:text-[#c3c3c3] justify-center items-center">
        <a
          className=" w-8 duration-75 hover:text-[white] z-[9996] "
          href="https://www.facebook.com/"
        >
          <FacebookIcon />
        </a>
        <a
          className=" w-8 duration-75 hover:text-[white] z-[9996] mx-4 "
          href="https://www.instagram.com/"
        >
          <InstagramIcon />
        </a>
        <a
          className=" w-8 duration-75 hover:text-[white] z-[9996] mr-4 "
          href="https://www.linkedin.com/"
        >
          <LinkedInIcon />
        </a>
        <a
          className=" w-8 duration-75 hover:text-[white] z-[9996] "
          href="https://www.twitter.com/"
        >
          <TwitterIcon />
        </a>
      </motion.div>
    </div>
  );
};

export default Footer;
