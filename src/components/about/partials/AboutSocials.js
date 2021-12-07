import React from "react";
import { AiFillGithub, FaLinkedin, VscFilePdf } from "../../../assets";

const AboutSocials = () => {
  return (
    <section className="about-socials-container">
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
