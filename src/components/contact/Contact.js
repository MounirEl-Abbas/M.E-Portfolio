import React from "react";
import { FiMail } from "../../assets";
import { AiFillGithub } from "../../assets";
import { FaLinkedin } from "../../assets";
import FrameByFrame from "./partials/FrameByFrame";
const Contact = () => {
  return (
    <section className="contact page" id="contact">
      <FrameByFrame />
      <header data-aos="fade-left">
        <h2>
          Contact <span>ME</span>
        </h2>
      </header>

      <main data-aos="fade-up">
        <article>
          <a href="mailto:eamounir1@gmail.com" aria-label="Email Mounir">
            <FiMail />
            <p>eamounir1@gmail.com</p>
          </a>
        </article>
        <article>
          <a
            href="https://github.com/MounirEl-Abbas"
            aria-label="View Mounir on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
            <p>github.com/MounirEl-Abbas</p>
          </a>
        </article>
        <article>
          <a
            href="https://www.linkedin.com/in/mounir-el-abbas-04b733212/"
            aria-label="View Mounir on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <p>linkedin.com/in/mounir-el-abbas</p>
          </a>
        </article>
      </main>
    </section>
  );
};

export default Contact;
