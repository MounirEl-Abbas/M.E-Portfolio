import React from "react";
import { HiDownload, MdOpenInNew } from "../../../assets";
import resume from "../../../assets/ME-Resume.pdf";

const AboutInfo = () => {
  return (
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
            <a href={resume} name="resume" target="_blank" rel="noreferrer">
              <i>
                <MdOpenInNew />
              </i>
            </a>
            <a href={resume} download={resume}>
              <HiDownload />
            </a>
          </div>
        </div>

        <a id="projects-btn" href="#projects" name="about">
          Projects
        </a>
      </article>
    </section>
  );
};

export default AboutInfo;
