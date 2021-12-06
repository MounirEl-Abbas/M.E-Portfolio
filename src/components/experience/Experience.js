import React from "react";
import Skills from "./partials/Skills";
import Projects from "./partials/Projects";

const Experience = () => {
  return (
    <section className="experience page">
      <header>
        <h2>
          Skills <span className="initials">&</span> Projects
        </h2>
      </header>
      <Skills />
      <Projects />
    </section>
  );
};

export default Experience;

/*
1. take pictures of websites
2. host websites
3. finish this page
*/
