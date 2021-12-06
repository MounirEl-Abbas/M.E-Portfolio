import React from "react";
import { SelfShot } from "../../../assets";
import { AiFillGithub, FaLinkedin, VscFilePdf } from "../../../assets";

const AboutSocials = () => {
  return (
    <section className="about-socials-container">
      <article className="about-socials-container-self-shot">
        <img src={SelfShot} />
      </article>
      <article className="about-socials-container-socials">
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
