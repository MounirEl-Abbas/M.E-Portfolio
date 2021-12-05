import React from "react";

const AboutInfo = () => {
  return (
    <section className="hero-info">
      <article className="hero-info-title">
        <h1>Hello!</h1>
        <p>I'm Mounir El-Abbas, a Front-End Web Developer.</p>
        <p>
          Thank you for considering
          <span className="initials" title="My Initials">
            {" ME "}
          </span>
          for your Web Development needs!
        </p>
      </article>
      <article className="hero-info-body">
        <p>
          I am enthusiastic to apply my obsessive attention to detail and
          perfectionism to serve our customers/users.
        </p>
        <p>
          I am eager to meet, collaborate, and learn with like-minded
          individuals.
        </p>
      </article>
      <article className="hero-info-btns">
        <a href="me-resume.pdf" name="resume" download>
          Resume
        </a>
        <a href="#about" name="about">
          Projects
        </a>
      </article>
    </section>
  );
};

export default AboutInfo;
