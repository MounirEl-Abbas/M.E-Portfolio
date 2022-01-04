import React from "react";
import { skillsSection } from "../myInfo";

const Skills = () => {
  return (
    <section className="skills">
      <header>
        <h2>{skillsSection.title}</h2>
        <p>{skillsSection.subTitle}</p>

        <ul>
          {skillsSection.skills.map(skill => (
            <li>{skill}</li>
          ))}
        </ul>
        <ul>
          {skillsSection.softwareSkills.map(skill => (
            <li title={skill.skillName}>
              <img src={skill.skillIcon} alt="" />
            </li>
          ))}
        </ul>
      </header>
    </section>
  );
};

export default Skills;
