import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mDown = () => {
      setClick(true);
    };

    const mUp = () => {
      setClick(false);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const mLeave = () => {
      setHidden(true);
    };

    const mEnter = () => {
      setHidden(false);
    };

    const addLinkEvents = () => {
      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
        el.addEventListener("click", () => setLinkHover(false));
      });
      document.querySelectorAll("Link").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
        el.addEventListener("click", () => setLinkHover(false));
      });
      document.querySelectorAll("button").forEach((el) => {
        el.addEventListener("mouseover", () => setLinkHover(true));
        el.addEventListener("mouseout", () => setLinkHover(false));
        el.addEventListener("click", () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      <motion.div
        className={
          "cursor pointer-events-none max-lg:hidden fixed top-[0px] left-[0px] w-[25px] h-[25px] bg-[#2a363c0] border-[1px] border-[#999ea3] rounded-full translate-x-[-50%] translate-y-[-50%] z-[9995]  duration-50 " +
          (hidden ? "c--hidden opacity-0  " : " ") +
          (click ? "c--click translate-x-[-50%] translate-y-[-50%] bg-[#1e2830af] border-none scale-[1.75] duration-100 " : " ") +
          (linkHover ? "c--hover translate-x-[-50%] translate-y-[-50%] bg-[#1e283055] border-none scale-[2] duration-100 " : " ")
        }
        animate={{
          left: position.x,
          top: position.y,
        }}
        transition={{
          duration: 0,
          ease: "linear",
        }}
      >

      </motion.div>
        <motion.div
          className={
            "cursor pointer-events-none max-lg:hidden fixed top-[0px] left-[0px] w-[16px] h-[16px] bg-[#0f181ab3] rounded-full translate-x-[-50%] translate-y-[-50%] z-[9995] duration-50 " +
            (hidden ? "c--hidden opacity-0  " : " ") +
            (click ? "c--click translate-x-[-50%] translate-y-[-50%] bg-[#1e2830af] scale-[2] duration-100 " : " ") +
            (linkHover ? "c--hover translate-x-[-50%] translate-y-[-50%] bg-[#1e283060] scale-[2.5] duration-100 " : " ")
          }
          animate={{
            left: position.x,
            top: position.y,
          }}
        ></motion.div>
    </>
  );
};

export default Cursor;
