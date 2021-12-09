import React from "react";
import { useAppContext } from "../../context/AppContext";

//Components
import NavHeader from "./partials/NavHeader";
import NavPages from "./partials/NavPages";
import NavSocials from "./partials/NavSocials";

const Navbar = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <nav className={`${isMenuOpen ? "navbar navbar-open" : "navbar"}`}>
      <NavHeader />
      <NavPages />
      <NavSocials />
    </nav>
  );
};

export default Navbar;
