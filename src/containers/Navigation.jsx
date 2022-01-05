import React from "react";
import Navbar from "../components/Navbar";
import NavDropdown from "../components/NavDropdown";

const Navigation = () => {
  return (
    <div aria-label="container for navigation components">
      <Navbar />
      <NavDropdown />
    </div>
  );
};

export default Navigation;
