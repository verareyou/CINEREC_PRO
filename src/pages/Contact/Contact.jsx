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
import Form from "../../components/Form";
import { useState, useEffect } from "react";

const Contact = () => {
  const [mousepos, setMousepos] = useState({ x: 200, y: 500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousepos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="contact  ">
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
          // height: 100vh;
          // position: relative;
          // z-index: -1;
        }
        `}
      </style>
      <Cursor />
      <motion.div
        initial={{ y: 250, x: -1000 }}
        animate={{ y: mousepos.y * 0.1 + 300, x: mousepos.x * 0.1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="textabout font-black z-[-2] blur-[30px] rounded-[30%] max-lg:hidden h-32 w-80 max-md:w-80 max-[500px]:w-56 bg-[#cacbcc] text-[#cad4de] duration-150 absolute  "
      />
      

      <motion.div
        whileInView={{
          opacity: [0, 1],
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          times: [0, 1],
        }}
        className="whole z-[9999] "
      >
        <Nav />
        <div
          style={{
            transform: `translate(${mousepos.x * 0.01}px`,
          }}
          className="textabout text-[20vw] font-black z-[-1] blur-[10px] max-md:blur-sm animate-scalingabout text-[#cacfd3] absolute top-[-20%] max-lg:top-[-10%] max-md:top-[-8%] max-sm:top-[-5%]  "
        >
          <RandomReveal isPlaying={true} duration={0.5} characters="Contact" />
        </div>
        <div className=" top-[100px] z-[99999] w-full min-h-full  backdrop-filter backdrop-blur-smd flex flex-col  ">
          <div className=" p-24 duration-150 z-[9999] max-sm:p-8 lg:mr-56 mt-[19vh] max-md:mt-[10vh] max-sm:mt-[10vh] ">
            <div className=" animate-scalingabout form text-[#7e868f] text-[1.25vw] h-96 w-96 max-md:w-full max-[500px]:w-full max-sm:text-[2vh] max-lg:text-[1.75vw]  font-medium">
              <Form />
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
