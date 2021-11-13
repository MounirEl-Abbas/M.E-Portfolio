import React from "react";

//icons
import { AiFillGithub } from "../../assets/icons";
import { FaLinkedin } from "../../assets/icons";
import { GrDocumentPdf } from "../../assets/icons";
const NavSocials = () => {
  return (
    <section className="nav-socials">
      <ul>
        <li>
          <a href="">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="">
            <GrDocumentPdf />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavSocials;
