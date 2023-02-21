import React from "react";
import { RandomReveal } from "react-random-reveal";
import Cursor from "../../components/Cursor";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import img from "../assets/img3.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
    <head>
      <title>Contact</title>
    </head>
      <style>
        {`
        .whole {
          // background-image: url(${img});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-blend-mode: screen;
          // background-color: rgba(200, 200, 200, 1);
          height: 100vh;
          position: relative;
          // z-index: -1;
        }
        `}
      </style>
      <Cursor />

      <motion.div
       whileInView={{
        opacity: [0, 1],
    }}
    transition={{
        duration: 0.4,
        ease: "easeInOut",
        times: [0, 1],
    }}
      className="whole ">
        <Nav />
        <div className="textabout text-[20vw] font-black z-[-1] blur-[10px] max-md:blur-sm animate-scalingabout text-[#cad4de] duration-150 absolute top-[-20%] max-lg:top-[-10%] max-md:top-[-8%] max-sm:top-[-5%]  ">
          <RandomReveal isPlaying={true} duration={0.5} characters="Contact" />
        </div>
        <div className=" top-[100px] w-full min-h-full  backdrop-filter backdrop-blur-smd flex flex-col  ">
         
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Contact;
