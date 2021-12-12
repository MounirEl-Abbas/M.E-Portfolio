import React from "react";
import { HiDownload, MdOpenInNew } from "../../assets";
import resume from "../../assets/ME-Resume.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <figure id="hero-bg-container"></figure>
      <section className="about-info">
        <article className="about-info-title">
          <h1>Hello!</h1>

          <div>
            <p>
              I'm <span>Mounir El-Abbas</span>
            </p>
            <p>
              a <span>Front-End Web Developer</span>.
            </p>
          </div>
          <p>
            Thank you for considering
            <span className="accent-color" title="My Initials">
              {" ME "}
            </span>
            for your Web Development needs!
          </p>
        </article>
        <article className="about-info-body">
          <p>
            <strong>Enthusiastic</strong> to apply my obsessive attention to
            detail and perfectionism to serve our customers/users.
          </p>
          <p>
            <strong>Eager</strong> to meet, collaborate, and learn with
            like-minded individuals.
          </p>
        </article>
        <article className="about-info-btns">
          <div id="resume-btns-container">
            <p>Resume</p>
            <div>
              <a
                href={resume}
                name="resume-openInTab"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <MdOpenInNew />
                </i>
              </a>
              <a href={resume} name="resume-download" download={resume}>
                <HiDownload />
              </a>
            </div>
          </div>

          <a id="projects-btn" href="#projects" name="about">
            Projects
          </a>
        </article>
      </section>
    </section>
  );
};

export default About;

/* <div className="quotes">
          <blockquote>
            “First, solve the problem. Then, write the code.”
            <cite>-John Johnson</cite>
          </blockquote>
          <div id="quote-sep"></div>
          <blockquote>
            "Man is not disturbed by things, but of the views he takes of them."
            <cite>-Epictetus</cite>
          </blockquote>
        </div> */
