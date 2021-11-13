import React from "react";
import { FaRedhat } from "../../assets/icons";

const NavHeader = () => {
  return (
    <section className="nav-header">
      <span>
        <FaRedhat />
      </span>
      <h2>Mounir El-Abbas</h2>
      <p>Front-End Developer</p>
    </section>
  );
};

export default NavHeader;
