import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import skillsImg from "../../assets/images/keyboardImg.jpg";

const DevExperience = () => {
  return (
    <section className="page-container">
      <div className="img-container">
        <img
          src={skillsImg}
          alt="Keyboard with custom ESC keycap and a cup of coffee."
        />
      </div>
      <Skills />
      <Projects />
    </section>
  );
};

export default DevExperience;
