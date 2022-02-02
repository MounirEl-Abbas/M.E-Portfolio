import React, { useState, useEffect } from "react";
import { projects } from "../myInfo";
import { FaChevronLeft, FaChevronRight } from "../assets";
const ProjectSlider = ({ projectID }) => {
  const [projectOneIndex, setProjectOneIndex] = useState(0);
  const [projectTwoIndex, setProjectTwoIndex] = useState(0);
  const [projectThreeIndex, setProjectThreeIndex] = useState(0);

  useEffect(() => {
    const projectOneLastIndex = projects[0].images.length - 1;
    if (projectOneIndex < 0) setProjectOneIndex(projectOneLastIndex);
    if (projectOneIndex > projectOneLastIndex) setProjectOneIndex(0);

    const projectTwoLastIndex = projects[1].images.length - 1;
    if (projectTwoIndex < 0) setProjectTwoIndex(projectTwoLastIndex);
    if (projectTwoIndex > projectTwoLastIndex) setProjectTwoIndex(0);

    const projectThreeLastIndex = projects[2].images.length - 1;
    if (projectThreeIndex < 0) setProjectThreeIndex(projectThreeLastIndex);
    if (projectThreeIndex > projectThreeLastIndex) setProjectThreeIndex(0);
  }, [projectOneIndex, projectTwoIndex, projectThreeIndex]);

  const handleSlider = (e, targetProjectSlider) => {
    const INCR_OR_DECR = e.currentTarget.value;
    //Find out which project slider to increment/decrement
    if (targetProjectSlider === 1) {
      if (INCR_OR_DECR === "increment") setProjectOneIndex(projectOneIndex + 1);
      if (INCR_OR_DECR === "decrement") setProjectOneIndex(projectOneIndex - 1);
    }
    if (targetProjectSlider === 2) {
      if (INCR_OR_DECR === "increment") setProjectTwoIndex(projectTwoIndex + 1);
      if (INCR_OR_DECR === "decrement") setProjectTwoIndex(projectTwoIndex - 1);
    }
    if (targetProjectSlider === 3) {
      if (INCR_OR_DECR === "increment")
        setProjectThreeIndex(projectThreeIndex + 1);
      if (INCR_OR_DECR === "decrement")
        setProjectThreeIndex(projectThreeIndex - 1);
    }
  };

  return (
    <section className="slider-container">
      {projects.map(project => {
        if (project.id === projectID) {
          return project.images.map((image, imageIndex) => {
            let index;
            if (project.id === 1) index = projectOneIndex;
            if (project.id === 2) index = projectTwoIndex;
            if (project.id === 3) index = projectThreeIndex;

            let position = "otherImage";
            if (
              imageIndex === index + 1 ||
              (index === project.images.length - 1 && imageIndex === 0)
            )
              position = "nextImage";

            if (imageIndex === index) position = "activeImage";

            return (
              <figure className={position} key={imageIndex}>
                <img src={image} alt="" />
              </figure>
            );
          });
        }
        return <span style={{ display: "none" }} key={project.id}></span>;
      })}
      <div className="slider-btns">
        <button
          className="prev"
          value="decrement"
          id={projectID}
          onClick={e => handleSlider(e, projectID)}>
          <FaChevronLeft />
        </button>
        <button
          className="next"
          value="increment"
          id={projectID}
          onClick={e => handleSlider(e, projectID)}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectSlider;
