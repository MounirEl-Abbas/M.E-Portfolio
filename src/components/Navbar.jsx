import React from "react";
import { useAppContext } from "../context/AppContext";

//Components
import Socials from "./Socials";
import MenuBtn from "./MenuBtn";

const Navbar = () => {
  const { isMenuOpen } = useAppContext();
  return (
    <nav className={`${isMenuOpen ? "navbar navbar-open" : "navbar"}`}>
      <h3>Mounir El-Abbas</h3>
      <MenuBtn />
      <Socials />
    </nav>
  );
};

export default Navbar;
