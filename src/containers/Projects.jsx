// import ProjectModal from "./partials/ProjectModal";
import { projects } from "../myInfo";
const Projects = () => {
  return (
    <section className="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <div className="projects-container">
        {projects.map(project => (
          <article key={project.id}>
            <figure>
              <img src={project.images[0]} alt="" />
            </figure>
            <div>
              <p>{project.name}</p>
              <p>project desc</p>
              <button>Code</button>
              <button>Live Demo</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
