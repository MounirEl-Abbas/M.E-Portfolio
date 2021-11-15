import React from "react";

//Components
import NavHeader from "./NavHeader";
import NavPages from "./NavPages";
import NavSocials from "./NavSocials";

//Icons
import { GiHamburgerMenu } from "../../assets/icons";
import hatIcon from "../../assets/images/hat.png";

const Navbar = () => {
  return (
    <aside className="nav-container">
      {/* <FaRedhat id="hat-icon" /> */}
      <img src={hatIcon} id="hat-icon" alt="" />
      <nav className="nav">
        <NavHeader />
        <NavPages />
        <NavSocials />
        {/* <GiHamburgerMenu /> */}
      </nav>
    </aside>
  );
};

export default Navbar;
