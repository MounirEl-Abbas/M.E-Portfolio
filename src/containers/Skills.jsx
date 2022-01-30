import React from "react";
import { skillsSection } from "../myInfo";

const Skills = () => {
  let uniqueKey1 = 0;
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
            <img src="./images/illustrations/skills.png" alt="" />
          </figure>

          <div className="lists-container">
            <ul>
              {skillsSection.softwareSkills.map(skill => {
                uniqueKey1++;
                return (
                  <li key={uniqueKey1} title={skill.skillName}>
                    <img src={skill.skillIcon} alt="" />
                  </li>
                );
              })}
            </ul>
            <ul>
              {skillsSection.skills.map(skill => {
                uniqueKey2--;
                return <li key={uniqueKey2}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
