import React from "react";

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

const Skills = () => {
  return (
    <section className="skills-container">
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

        <ul
          className="skills-inprogress skills-list"
          title="Currently Learning">
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
      </div>
    </section>
  );
};

export default Skills;
