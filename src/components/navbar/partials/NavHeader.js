import React from "react";
import Binary from "./Binary";
const NavHeader = () => {
  return (
    <header className="navbar-header">
      <div id="selfie-container">
        <Binary />
      </div>
      <h3>Mounir El-Abbas</h3>
      <p>Front-End Developer</p>
    </header>
  );
};

export default NavHeader;
