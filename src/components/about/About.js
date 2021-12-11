import React from "react";

import AboutInfo from "./partials/AboutInfo";

const About = () => {
  return (
    <section className="about" id="about">
      <figure id="hero-bg-container"></figure>
      <AboutInfo />
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
