import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "../assets";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    console.log("useeffect");
    window.onscroll = () => {
      console.log("1");
      if (window.scrollY < 200) {
        setShowScroll(false);
      }
      if (window.scrollY >= 200) {
        setShowScroll(true);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showScroll && (
        <button id="scrollTop" onClick={scrollToTop}>
          <FaArrowCircleUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
