import { MdOpenInNew } from "../../../assets";
import placeholderImg from "../../../assets/images/hero-bg2.jpg";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <header>
        <h2>Projects</h2>
      </header>
      <div className="projects-container">
        <article>
          <figure>
            <img src={placeholderImg} alt="" />
          </figure>
          <div>
            <h4>Travel Website</h4>
            <button>Learn More</button>
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
            <button>Learn More</button>
          </div>
        </article>
        <article>
          <figure>
            <img src={placeholderImg} alt="" />
          </figure>
          <div>
            <h4>Project 3</h4>
            <button>Learn More</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
