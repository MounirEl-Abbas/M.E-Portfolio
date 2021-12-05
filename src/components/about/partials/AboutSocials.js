import React from "react";
import { SelfShot } from "../../../assets";
import {
  AiFillGithub,
  FaLinkedin,
  VscFilePdf,
  SiElasticstack,
} from "../../../assets";

const AboutSocials = () => {
  return (
    <section className="hero-socials-container">
      <article className="hero-socials-container-self-shot">
        <img src={SelfShot} />
      </article>
      <article className="hero-socials-container-socials">
        <ul>
          <li>
            <AiFillGithub />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <VscFilePdf />
          </li>
        </ul>
      </article>
    </section>
  );
};

export default AboutSocials;
