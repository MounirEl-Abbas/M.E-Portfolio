import React, { useState, useEffect } from "react";
import { useAppContext } from "../../../context/AppContext";
import { FaChevronLeft, FaChevronRight } from "../../../assets";

const ProjectModal = () => {
  const { isModalOpen, setIsModalOpen, projectInfo } = useAppContext();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!Object.keys(projectInfo).length) return;
    const { images } = projectInfo;
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projectInfo]);

  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      {Object.keys(projectInfo).length && (
        <section>
          <div className="slider-container">
            {projectInfo.images.map((image, imageIndex) => {
              let position = "otherImage";
              if (
                imageIndex === index + 1 ||
                (index === projectInfo.images.length - 1 && imageIndex === 0)
              ) {
                position = "nextImage";
              }
              if (imageIndex === index) {
                position = "activeImage";
              }

              return (
                <figure className={position} key={imageIndex}>
                  <img src={image} alt="" />
                </figure>
              );
            })}
            <div>
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <FaChevronLeft />
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <FaChevronRight />
              </button>
            </div>
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
