import React from "react";
import { headshot } from "../../../assets";
const NavHeader = () => {
  return (
    <header className="navbar-header">
      <figure id="selfie-container">
        <img src={headshot} alt="Head shot of myself." />
      </figure>
      <h3>Mounir El-Abbas</h3>
      <p>Front-End Developer</p>
    </header>
  );
};

export default NavHeader;
