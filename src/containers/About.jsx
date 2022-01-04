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

      <div className="container-max-width">
        <article className="about-info-title">
          <h1>{greetings.title}</h1>
          <p>{greetings.description}</p>
        </article>
        <SocialsIcons IconsOnly={false} />
        <figure></figure>
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
