import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
    whileInView={{
        opacity: [0, 1],
    }}
    transition={{
        duration: 0.8,
        ease: "easeInOut",
        times: [0, 1],
    }}
    className="h-[40vh] bg-white flex flex-col items-center justify-center ">
      <div className="follow text-5xl font-thin ">Follow</div>
      <div className="social mt-4 flex flex-row duration-150 hover:text-[#c3c3c3] justify-center items-center">
        <a
          className=" w-8 duration-75 hover:text-[black] "
          href="https://www.facebook.com/"
        >
          <FacebookIcon />
        </a>
        <a
          className=" w-8 duration-75 hover:text-[black] mx-4 "
          href="https://www.instagram.com/"
        >
          <InstagramIcon />
        </a>
        <a
          className=" w-8 duration-75 hover:text-[black] mr-4 "
          href="https://www.linkedin.com/"
        >
          <LinkedInIcon />
        </a>
        <a
          className=" w-8 duration-75 hover:text-[black] "
          href="https://www.twitter.com/"
        >
          <TwitterIcon />
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
