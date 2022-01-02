import React from "react";
import { useAppContext } from "../../../context/AppContext";
//Icons
import { ImCross, GiHamburgerMenu } from "../../../assets";
const MenuBtn = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();

  return (
    <button id="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <ImCross id="menu-btn-cross" /> : <GiHamburgerMenu />}
    </button>
  );
};

export default MenuBtn;
