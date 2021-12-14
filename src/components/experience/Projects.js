// import { MdOpenInNew } from "../../../assets";
import { useAppContext } from "../../context/AppContext";
import ProjectModal from "./partials/ProjectModal";
import projects from "../utils/projectsData";
const Projects = () => {
  const { handleModalView, isModalOpen } = useAppContext();
  return (
    <section
      className={`${isModalOpen ? "projects projects-modal" : "projects"}`}
      id="projects"
    >
      {isModalOpen && <ProjectModal />}
      <header data-aos="fade-left">
        <h2>Projects</h2>
      </header>
      <div className="projects-container">
        {projects.map((project) => (
          <article
            key={project.id}
            data-aos="zoom-in-right"
            data-aos-delay="500"
          >
            <figure>
              <img src={project.images[0]} alt="" />
            </figure>
            <div>
              <p>{project.name}</p>
              <button name={project.name} onClick={(e) => handleModalView(e)}>
                Learn More
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
