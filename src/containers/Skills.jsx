import React from "react";

//Info
import { skillsSection } from "../myInfo";
//Icons
import { SiRedux, MdWeb, IoIosBrowsers } from "../assets";

const Skills = () => {
  //Seperate keys for <ul>
  //Software Skills
  let uniqueKey1 = 0;
  //Additional skills (descritive)
  let uniqueKey2 = 999;
  return (
    <section className="skills">
      <div className="skills-content">
        <header>
          <h2>{skillsSection.title}</h2>
          <p>{skillsSection.subTitle}</p>
        </header>
        <div>
          <figure>
            <img
              src="./images/illustrations/skills.png"
              alt="Illustration of a developer on a computer"
            />
          </figure>

          <div className="lists-container">
            {/* List of software skills */}
            <ul>
              {skillsSection.softwareSkills.map(skill => {
                uniqueKey1++;
                return (
                  <li key={uniqueKey1} title={skill.skillName}>
                    <img
                      src={skill.skillIcon}
                      alt={`Icon of ${skill.skillName}`}
                    />
                  </li>
                );
              })}
            </ul>
            {/* List of descriptive skills */}
            <ul>
              {skillsSection.skills.map(skill => {
                uniqueKey2--;
                return (
                  <li key={uniqueKey2}>
                    <span>
                      {skill.icon === "MdWeb" ? (
                        <MdWeb />
                      ) : skill.icon === "SiRedux" ? (
                        <SiRedux />
                      ) : (
                        <IoIosBrowsers />
                      )}
                    </span>
                    <p>{skill.info}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
