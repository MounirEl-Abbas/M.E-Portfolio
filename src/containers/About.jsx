import React from "react";
import Socials from "../navbar/partials/Socials";

const About = () => {
  return (
    <section className="about">
      <section className="about-info">
        <article className="about-info-title">
          <h1>Hello, I'm Mounir</h1>
          <p>
            A self-motivated Front-End Developer. Enthusiastic to apply my
            obsessive attention to detail and perfectionism to serve our
            customers/users. Eager to meet, collaborate, and learn with
            like-minded individuals.
          </p>
        </article>
        <Socials />
      </section>

      <figure></figure>
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
