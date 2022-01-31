import ProjectCard from "../components/ProjectCard";
import { BiCodeAlt } from "../assets";
const Projects = () => {
  return (
    <section className="projects">
      <div id="projects-bg"></div>
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
