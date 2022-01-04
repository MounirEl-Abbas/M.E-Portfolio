import React from "react";
import resume from "../assets/ME-Resume.pdf";
//icons
import { AiFillGithub, FaLinkedin, VscFilePdf } from "../assets";
import { useAppContext } from "../context/AppContext";
import { CloseMenuBtn } from "./MenuBtn";

const NavDropdown = () => {
  const { isMenuOpen } = useAppContext();

  return (
    <section
      className={
        isMenuOpen ? "navbar-dropdown navbar-dropdown-open" : "navbar-dropdown"
      }>
      <div>
        <h1>name</h1>
        <CloseMenuBtn />
      </div>

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
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a href={resume} target="_blank" rel="noreferrer">
              <VscFilePdf />
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavDropdown;
