import React from "react";
import { skillsSection } from "../myInfo";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-content">
        <header>
          <h2>{skillsSection.title}</h2>
          <p>{skillsSection.subTitle}</p>
        </header>

        <figure>img</figure>

        <ul>
          {skillsSection.softwareSkills.map(skill => (
            <li title={skill.skillName}>
              <img src={skill.skillIcon} alt="" />
            </li>
          ))}
        </ul>
        <ul>
          {skillsSection.skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
