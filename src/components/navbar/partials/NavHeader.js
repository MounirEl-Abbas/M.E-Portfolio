import React from "react";
import selfShot from "../../../assets/images/me-headshot.png";
const NavHeader = () => {
  return (
    <header className="navbar-header">
      <figure id="selfie-container">
        <img src={selfShot} alt="Head shot of myself." />
      </figure>
      <h3>Mounir El-Abbas</h3>
      <p>Front-End Developer</p>
    </header>
  );
};

export default NavHeader;
