import React from "react";

//Components
import SocialsIcons from "../components/SocialsIcons";

//Info
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
          <img
            src="./images/illustrations/pair.png"
            alt="Pair programming illustration"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
