import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import HomeLanding from "./HomeLanding";
import HomeWork from "./HomeWork";
import { motion } from "framer-motion";
import Cursor from "../../components/Cursor";

const Landing = () => {
  return (
    <motion.div
    className="home ">
      <head>
        <title>Cinerec</title>
        <meta name="description" content="Cinerec" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </head>
      <Cursor />
      <Nav />
      <HomeLanding />
      <HomeWork />
      <Footer />
      {/* <div className="h-[40vh] "></div> */}
    </motion.div>
  );
};

export default Landing;
