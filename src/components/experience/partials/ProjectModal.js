import React from "react";
import { useAppContext } from "../../../context/AppContext";

const ProjectModal = () => {
  const { isModalOpen, setIsModalOpen, projectInfo } = useAppContext();
  console.log(`projectInfo`, projectInfo);
  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      {Object.keys(projectInfo).length && (
        <section>
          <div className="slider-container">
            <figure>
              <img src={projectInfo.images[0]} alt="" />
            </figure>
          </div>
          <article>
            <div>
              <h3>{projectInfo.name}</h3>
              <p>{projectInfo.subTitle}</p>
            </div>
            <div>
              <p>{projectInfo.description}</p>
              <div>
                <div>
                  <a href={projectInfo.url} target="_blank" rel="noreferrer">
                    View Site
                  </a>
                  <a href={projectInfo.github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </div>
                <button onClick={() => setIsModalOpen(false)}>X</button>
              </div>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default ProjectModal;
