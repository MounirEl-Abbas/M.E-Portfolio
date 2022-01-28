import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-content">
        <header>
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
