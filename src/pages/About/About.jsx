import React from "react";
import { RandomReveal } from "react-random-reveal";
import Cursor from "../../components/Cursor";
import Nav from "../../components/Nav";
import img from "../assets/img3.jpg";

const About = () => {
  return (
    <>
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
          z-index: -1;
        }
        `}
      </style>
      <Cursor />

      <Nav />
      <div className="textabout text-[20vw] font-black z-[-9] animate-scalingabout text-[#cad4de] absolute top-[-20%] max-lg:top-[-10%] max-md:top-[-8%] max-sm:top-[-5%]  ">
        <RandomReveal isPlaying={true} duration={0.5} characters="ABOUT" />
      </div>
      <div className="whole backdrop-blur-[10px] max-md:backdrop-blur-sm ">
        <div
          style={{ height: "calc(100vh - 100px)" }}
          className=" 
          top-[100px] w-full h-full absolute backdrop-filter backdrop-blur-smd flex items-center
        "
        >\
        
        </div>
      </div>
    </>
  );
};

export default About;
