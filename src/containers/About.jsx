import React from "react";
import SocialsIcons from "../components/SocialsIcons";
import { greetings } from "../myInfo";

const About = () => {
  return (
    <section className="about">
      <div id="hero-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="about-content">
        <article>
          <h1>{greetings.title}</h1>
          <p>{greetings.description}</p>
          <SocialsIcons IconsOnly={false} />
        </article>
        <figure>
          <img src="./images/illustrations/pair.png" alt="" />
        </figure>
      </div>
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
