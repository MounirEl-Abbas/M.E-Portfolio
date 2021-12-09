// import { MdOpenInNew } from "../../../assets";
import placeholderImg from "../../../assets/images/hero-bg2.jpg";
import { useAppContext } from "../../../context/AppContext";
import ProjectModal from "./ProjectModal";
const Projects = () => {
  const { handleModalView } = useAppContext();
  return (
    <section className="projects" id="projects">
      <ProjectModal />
      <header>
        <h2>Projects</h2>
      </header>
      <div className="projects-container">
        <article>
          <figure>
            <img src={placeholderImg} alt="" />
          </figure>
          <div>
            <h4>City Viewer</h4>
            <button name="cityViewer" onClick={(e) => handleModalView(e)}>
              Learn More
            </button>
          </div>
        </article>
        <article>
          <figure>
            <img src={placeholderImg} alt="" />
          </figure>
          <div>
            <h4>
              Memories <span>MERN</span>
            </h4>
            <button name="memories" onClick={(e) => handleModalView(e)}>
              Learn More
            </button>
          </div>
        </article>
        <article>
          <figure>
            <img src={placeholderImg} alt="" />
          </figure>
          <div>
            <h4>Project 3</h4>
            <button name="placeholder" onClick={(e) => handleModalView(e)}>
              Learn More
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
