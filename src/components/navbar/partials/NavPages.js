import React from "react";

//icons
import { AiOutlineHome } from "../../../assets";
import { VscCode } from "../../../assets";
import { BsPerson } from "../../../assets";
import { FiMail } from "../../../assets";

import { BsBarChartLine } from "react-icons/bs";

//context
import { useAppContext } from "../../../context/AppContext";
const NavPages = () => {
  const { handleChangePage, currentPage } = useAppContext();

  return (
    <section className="navbar-pages">
      <ul>
        <li className={`${currentPage === "about" ? "current-page" : ""}`}>
          <a onClick={(e) => handleChangePage(e)} name="about" href="#about">
            <i>
              <BsPerson />
              <span>About</span>
            </i>
          </a>
        </li>
        <li className={`${currentPage === "skills" ? "current-page" : ""}`}>
          <a onClick={(e) => handleChangePage(e)} name="skills" href="#skills">
            <i>
              <BsBarChartLine />
              <span>Skills</span>
            </i>
          </a>
        </li>
        <li className={`${currentPage === "projects" ? "current-page" : ""}`}>
          <a
            onClick={(e) => handleChangePage(e)}
            name="projects"
            href="#projects"
          >
            <i>
              <VscCode />
              <span>Projects</span>
            </i>
          </a>
        </li>

        <li className={`${currentPage === "contact" ? "current-page" : ""}`}>
          <a
            onClick={(e) => handleChangePage(e)}
            name="contact"
            href="#contact"
          >
            <i>
              <FiMail />
              <span>Contact</span>
            </i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default NavPages;
