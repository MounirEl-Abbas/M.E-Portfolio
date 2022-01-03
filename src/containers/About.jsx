import React from "react";
import Socials from "../components/Socials";
import { greetings } from "../myInfo";

const About = () => {
  return (
    <section className="about">
      <section className="about-info">
        <article className="about-info-title">
          <h1>{greetings.title}</h1>
          <p>{greetings.description}</p>
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
