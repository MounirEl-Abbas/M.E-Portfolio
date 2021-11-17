import React from "react";
import { useAppContext } from "../../context/AppContext";

//Components
import NavHeader from "./NavHeader";
import NavPages from "./NavPages";
import NavSocials from "./NavSocials";

const SideMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return (
    <nav className={`${isMenuOpen ? "sideMenu sideMenu-Open" : "sideMenu"}`}>
      <NavHeader />
      <NavPages />
      <NavSocials />
    </nav>
  );
};

export default SideMenu;
