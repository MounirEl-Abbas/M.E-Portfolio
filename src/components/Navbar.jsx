import React, { useEffect, useState } from "react";

//Components
import { OpenMenuBtn } from "./MenuBtn";
//Icons
import SocialsIcons from "./SocialsIcons";

const Navbar = () => {
  const [showNavbarThreshold, setShowNavbarThreshold] = useState(false);

  //After 150px scrollY, navbar becomes fixed (top)
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
