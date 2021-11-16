import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import skillsImg from "../../assets/images/expImg.jpg";
import { useAppContext } from "../../context/AppContext";
const DevExperience = () => {
  const { isShowAll } = useAppContext();

  return (
    <section className="page-container experience-page">
      <header>
        <h2>
          Skills <span className="initials">&</span> Projects
        </h2>
      </header>
      <figure className="img-container experience-img">
        <img
          src={skillsImg}
          alt="Keyboard with custom ESC keycap and a cup of coffee."
        />
      </figure>
      <main className="page-content experience-page-content">
        <Skills />
        <Projects />
      </main>
    </section>
  );
};

export default DevExperience;
