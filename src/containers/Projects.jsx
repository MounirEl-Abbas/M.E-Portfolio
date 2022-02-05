import React from "react";

//Components
import ProjectCard from "../components/ProjectCard";
//Icons
import { BiCodeAlt } from "../assets";

const Projects = () => {
  return (
    <section className="projects">
      {/* Projects-Section BG gradient */}
      <div id="projects-bg"> </div>
      <div className="projects-content">
        <header>
          <span>
            <BiCodeAlt />
          </span>
          <h2>Projects</h2>
        </header>
        <div className="projects-container">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
