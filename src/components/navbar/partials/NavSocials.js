import React from "react";
import { useAppContext } from "../../../context/AppContext";
//icons
import {
  AiFillGithub,
  FaLinkedin,
  VscFilePdf,
  SiElasticstack,
} from "../../../assets";
const NavSocials = () => {
  const { setIsShowAll, isShowAll } = useAppContext();
  return (
    <section className="nav-socials">
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
          <a href="!#">
            <VscFilePdf />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavSocials;
