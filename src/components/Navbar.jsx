import React, { useEffect, useState } from "react";

//Components
import { OpenMenuBtn } from "./MenuBtn";
import SocialsIcons from "./SocialsIcons";

const Navbar = () => {
  const [showNavbarThreshold, setShowNavbarThreshold] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY < 150) {
        setShowNavbarThreshold(false);
      }
      if (window.scrollY >= 150) {
        setShowNavbarThreshold(true);
      }
    };
  }, []);

  return (
    <nav className={showNavbarThreshold ? "navbar navbar-fixed" : "navbar"}>
      <div className="navbar-content">
        <h3>Mounir El-Abbas</h3>
        <OpenMenuBtn />
        <SocialsIcons IconsOnly={true} />
      </div>
    </nav>
  );
};

export default Navbar;
