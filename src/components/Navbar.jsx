import React, { useEffect, useState } from "react";

//Components
import { OpenMenuBtn } from "./MenuBtn";
import SocialsIcons from "./SocialsIcons";

const Navbar = () => {
  const [showNavbarThreshold, setShowNavbarThreshold] = useState(false);
  useEffect(() => {
    const application = document.getElementById("bodyTag");
    application.addEventListener("scroll", getScrollPosition);
  }, []);

  const getScrollPosition = e => {
    const { scrollTop } = e.target;
    if (scrollTop >= 100) {
      setShowNavbarThreshold(true);
    } else {
      setShowNavbarThreshold(false);
    }
  };

  return (
    <nav className={showNavbarThreshold ? "navbar  navbar-fixed" : "navbar "}>
      <div className="container-max-width">
        <h3>Mounir El-Abbas</h3>
        <OpenMenuBtn />
        <SocialsIcons IconsOnly={true} />
      </div>
    </nav>
  );
};

export default Navbar;
