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

const About = () => {
  return (
    <>
    <head>
      <title>About</title>
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
        <div className="textabout text-[20vw] font-black z-[-1] blur-[10px] max-md:blur-sm animate-scalingabout text-[#cacfd3] duration-150 absolute top-[-20%] max-lg:top-[-10%] max-md:top-[-8%] max-sm:top-[-5%]  ">
          <RandomReveal isPlaying={true} duration={0.5} characters="ABOUT" />
        </div>
        <div className=" top-[100px] w-full min-h-full  backdrop-filter backdrop-blur-smd flex flex-col  ">
          <div className=" p-24 duration-150 max-sm:p-8 lg:mr-56 mt-[16vh] max-md:mt-[10vh] max-sm:mt-[10vh] ">
            <p className="text-[#7e868f] text-[1.5vw] max-sm:text-[2vh] max-lg:text-[2.25vw]  font-medium">
              Cinerec is a media creation company that specializes in
              creating high-quality visual and audio content for a variety of
              industries. With a team of skilled professionals, we offer
              services such as videography, photography, animation, and audio
              production. Our mission is to help businesses and organizations
              effectively communicate their message through engaging and
              creative media. From concept development to final production,
              Cinerec is committed to delivering top-notch results that
              exceed our clients' expectations. Let us help bring your vision to
              life.
            </p>
          </div>
          <div className="social mt-4 flex flex-row duration-150 hover:text-[#c3c3c3] ml-24 max-sm:ml-8 items-center">
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
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
