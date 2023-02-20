import React, { useState, useEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [click, setClick] = useState(false);
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
    //   document.addEventListener("mouseenter", mEnter);
    //   document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
    //   document.removeEventListener("mouseenter", mEnter);
    //   document.removeEventListener("mouseleave", mLeave);
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

    // const mLeave = () => {
    //   setHidden(true);
    // };

    // const mEnter = () => {
    //   setHidden(false);
    // };

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
      <div
        className={
          "cursor max-lg:hidden fixed top-0 left-0 w-[20px] h-[20px] bg-[#4d5e66b3] rounded-full translate-x-[-50%] translate-y-[-50%] pointer-events-none z-[9999] duration-50 " +
          (hidden ? "c--hidden opacity-0  " : " ") +
          (click ? "c--click translate-x-[-50%] translate-y-[-50%] scale-[2] duration-100 " : " ") +
          (linkHover ? "c--hover translate-x-[-50%] translate-y-[-50%] bg-[#ffffff84] scale-[2] duration-100 " : " ")
        }
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default Cursor;
