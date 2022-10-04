import React from "react";

//Context
import { useAppContext } from "../context/AppContext";
//Components
import { CloseMenuBtn } from "./MenuBtn";
//icons
import { AiFillGithub, FaLinkedinIn, VscFilePdf } from "../assets";
//Resume
import { socialLinks } from "../myInfo";

const NavDropdown = () => {
  const { isMenuOpen } = useAppContext();

  return (
    <nav
      className={
        isMenuOpen ? "navbar-dropdown navbar-dropdown-open" : "navbar-dropdown"
      }>
      <div>
        <h3>Mounir El-Abbas</h3>
        <CloseMenuBtn />
      </div>

      {/* Dropdown panel */}
      <div>
        <ul>
          <li>
            <a
              href="https://github.com/MounirEl-Abbas"
              aria-label="View Mounir on GitHub"
              target="_blank"
              rel="noreferrer">
              <AiFillGithub />
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mounir-el-abbas-04b733212/"
              aria-label="View Mounir on LinkedIn"
              target="_blank"
              rel="noreferrer">
              <FaLinkedinIn />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href={socialLinks.resume} target="_blank" rel="noreferrer">
              <VscFilePdf />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavDropdown;
