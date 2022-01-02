import React from "react";
//icons
import { AiFillGithub, FaLinkedin, VscFilePdf } from "../../../assets";
import resume from "../../../assets/ME-Resume.pdf";
const NavSocials = () => {
  return (
    <section className="navbar-socials">
      <ul>
        <li>
          <a
            href="https://github.com/MounirEl-Abbas"
            aria-label="View Mounir on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mounir-el-abbas-04b733212/"
            aria-label="View Mounir on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noreferrer">
            <VscFilePdf />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavSocials;
