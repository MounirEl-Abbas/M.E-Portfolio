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
} from "../../assets";

//icons
import { FaChevronRight } from "../../assets";

const Skills = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useAppContext();
  return (
    <section className="skills-container" id="skills">
      <header>
        <h2>Skills</h2>
      </header>
      <div className="skills">
        <ul className="skills-fundamentals skills-list" title="Fundamentals">
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
        <ul className="skills-additional skills-list" title="Noteworthy Skills">
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
        </ul>
        <div className="skills-learning">
          <ul
            className="skills-inprogress skills-list"
            title="Currently Learning"
          >
            <li>
              <img src={typescriptImg} alt="" />
              <p>Typescript</p>
            </li>
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
              Why am I learning back-end?
              <FaChevronRight
                className={`${isDropdownOpen ? "rotate-chevron" : ""}`}
              />
            </button>
            <ul className={`${isDropdownOpen ? "panel panel-open" : "panel"}`}>
              <li>
                <span>How APIs function under the hood</span>
              </li>
              <li>
                <span>How query parameters are set</span>
              </li>
              <li>
                <span>HTTP requests (CRUD operations)</span>
              </li>
              <p>
                Have collectively proven beneficial in the advancement of my
                front-end knowledge.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
