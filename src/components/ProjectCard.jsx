import React from "react";
import { projects } from "..//myInfo";

const ProjectCard = () => {
  return (
    <>
      {projects.map(project => (
        <article key={project.id}>
          <figure>
            <img src={project.images[0]} alt="" />
          </figure>
          <div>
            <p>{project.name}</p>
            <p>{project.subTitle}</p>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Code
            </a>
          </div>
        </article>
      ))}
    </>
  );
};

export default ProjectCard;
