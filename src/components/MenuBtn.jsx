import React from "react";
import { useAppContext } from "../context/AppContext";
//Icons
import { ImCross, AiOutlineMenu } from "../assets";

export const OpenMenuBtn = () => {
  const { setIsMenuOpen } = useAppContext();

  return (
    <button
      id="open-menu-btn"
      name="open-menu-button"
      onClick={() => setIsMenuOpen(true)}>
      <AiOutlineMenu />
    </button>
  );
};

export const CloseMenuBtn = () => {
  const { setIsMenuOpen } = useAppContext();

  return (
    <button
      id="close-menu-btn"
      name="close-menu-button"
      onClick={() => setIsMenuOpen(false)}>
      <ImCross />
    </button>
  );
};
