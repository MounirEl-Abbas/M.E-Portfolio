import React from "react";

//icons
import { AiOutlineHome } from "../../assets/icons";
import { VscCode } from "../../assets/icons";
import { BsPerson } from "../../assets/icons";
import { FiMail } from "../../assets/icons";

//context
import { useAppContext } from "../../context/AppContext";
const NavPages = () => {
  const { handleChangePage, currentPage } = useAppContext();

  return (
    <section className="nav-pages">
      <ul>
        <li className={`${currentPage === "home" ? "current-page" : ""}`}>
          <a onClick={(e) => handleChangePage(e)} name="home" href="#home">
            <i>
              <AiOutlineHome />
              <span>Home</span>
            </i>
          </a>
        </li>
        <li className={`${currentPage === "experience" ? "current-page" : ""}`}>
          <a
            onClick={(e) => handleChangePage(e)}
            name="experience"
            href="#experience"
          >
            <i>
              <VscCode />
              <span>Projects</span>
            </i>
          </a>
        </li>
        <li className={`${currentPage === "about" ? "current-page" : ""}`}>
          <a onClick={(e) => handleChangePage(e)} name="about" href="#about">
            <i>
              <BsPerson />
              <span>About</span>
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
