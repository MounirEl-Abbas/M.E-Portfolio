import React from "react";
import { projects } from "..//myInfo";
import { MdOpenInNew, AiFillGithub } from "../assets";
import ProjectSlider from "./ProjectSlider";

const ProjectCard = () => {
  return (
    <>
      {projects.map(project => (
        <article className="project-card" key={project.id}>
          <ProjectSlider projectID={project.id} />
          <div className="project-content">
            <div className="project-card-info">
              <h3>{project.name}</h3>
              <h5>{project.subTitle}</h5>
              <p>{project.description}</p>
            </div>
            <div id="btn-container">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <span>
                  <MdOpenInNew />
                </span>{" "}
                <p>Live Demo</p>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer">
                <span>
                  <AiFillGithub />
                </span>{" "}
                <p>Code</p>
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProjectCard;
