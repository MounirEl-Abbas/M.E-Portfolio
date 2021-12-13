import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "../../assets";

const ScrollToTop = () => {
  // const application = document.getElementById("app");

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const application = document.getElementById("app");

    application.addEventListener("scroll", listenToScroll);
  }, []);
  const scrollToTop = () => {
    const application = document.getElementById("app");

    application.scrollTo(0, 0);
  };

  const listenToScroll = (e) => {
    const { scrollTop } = e.target;
    if (scrollTop >= 600) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  return (
    <>
      {showScroll && (
        <button className="scrollTop" onClick={scrollToTop}>
          <FaArrowCircleUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
