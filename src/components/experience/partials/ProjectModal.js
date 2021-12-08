import React from "react";
import { useAppContext } from "../../../context/AppContext";

const ProjectModal = () => {
  const { isModalOpen } = useAppContext();
  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      <section>
        <div className="slider-container">
          <figure>
            <img src="" alt="" />
          </figure>
        </div>
        <article>
          <div>
            <h3>Project Name</h3>
            <p>Sub-title</p>
          </div>
          <div>
            <p>Longer Description</p>
            <div>
              <div>
                <button>View Site</button>
                <button>Github</button>
              </div>
              <button>X</button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ProjectModal;
