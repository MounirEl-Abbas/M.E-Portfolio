import React from "react";
import { GiHamburgerMenu } from "../../assets/icons";
import NavHeader from "./NavHeader";
import NavPages from "./NavPages";
import NavSocials from "./NavSocials";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavHeader />
      <NavPages />
      <NavSocials />
      {/* <GiHamburgerMenu /> */}
    </nav>
  );
};

export default Navbar;
