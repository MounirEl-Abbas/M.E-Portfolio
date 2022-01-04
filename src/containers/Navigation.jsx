import React from "react";
import Navbar from "../components/Navbar";
import NavDropdown from "../components/NavDropdown";

const Navigation = () => {
  return (
    <div role="nav-container">
      <Navbar />
      <NavDropdown />
    </div>
  );
};

export default Navigation;
