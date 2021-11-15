import React from "react";
import { useAppContext } from "../../context/AppContext";

//images
import {
  HTMLImg,
  CSSImg,
  javascriptImg,
  reactImg,
  reduxImg,
  typescriptImg,
  sassImg,
  gitImg,
  nodeImg,
  expressImg,
  mongoDBImg,
} from "../../assets/icons";

//icons
import { FaChevronRight } from "../../assets/icons";

const Skills = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useAppContext();
  return (
    <article className="skills">
      <ul className="skills-fundamentals" title="Fundamentals">
        <li>
          <img src={HTMLImg} alt="" />
          <p>HTML</p>
        </li>
        <li>
          <img src={CSSImg} alt="" />
          <p>CSS</p>
        </li>
        <li>
          <img src={javascriptImg} alt="" />
          <p>Javascript</p>
        </li>
        <li>
          <img src={reactImg} alt="" />
          <p>React</p>
        </li>
      </ul>
      <ul className="skills-additional" title="Noteworthy Skills">
        <li>
          <img src={gitImg} alt="" />
          <p>Git</p>
        </li>
        <li>
          <img src={sassImg} alt="" />
          <p>Sass</p>
        </li>
        <li>
          <img src={reduxImg} alt="" />
          <p>Redux</p>
        </li>
        <li>
          <img src={typescriptImg} alt="" />
          <p>Typescript</p>
        </li>
      </ul>
      <div className="skills-learning">
        <ul className="skills-inprogress" title="Currently Learning">
          <li>
            <img src={nodeImg} alt="" />
            <p>Node.js</p>
          </li>
          <li>
            <img src={expressImg} alt="" />
            <p>Express.js</p>
          </li>
          <li>
            <img src={mongoDBImg} alt="" />
            <p>MongoDB</p>
          </li>
        </ul>
        <div className="dropdown">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            Why am I learning back-end?{" "}
            <FaChevronRight
              className={`${isDropdownOpen ? "rotate-chevron" : ""}`}
            />
          </button>
          <ul className={`${isDropdownOpen ? "panel panel-open" : "panel"}`}>
            <li>Understanding how APIs function under the hood</li>
            <li>How query parameters are set</li>
            <li>HTTP requests (CRUD operations)</li>
            <li>
              <p>
                Have collectively proven beneficial in the advancement of my
                front-end knowledge.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Skills;
