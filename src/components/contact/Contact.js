import React from "react";
import contactImg from "../../assets/images/contactImg.jpg";
import { FiMail } from "../../assets/icons";
import { AiFillGithub } from "../../assets/icons";
import { FaLinkedin } from "../../assets/icons";
import { useAppContext } from "../../context/AppContext";
const Contact = () => {
  const { isShowAll } = useAppContext();

  return (
    <section className="contact-page-container page-container">
      <header>
        <h2>
          Contact <span className="initials">ME</span>
        </h2>
      </header>
      <figure className="contact img-container">
        <img
          src={contactImg}
          alt="Electronics on a bed with 'developer' written on the phone screen."
        />
      </figure>
      <main className="contact-page page-content">
        <p>
          <a href="mailto:eamounir1@gmail.com" aria-label="Email Mounir">
            <FiMail />
          </a>
          <a href="mailto:eamounir1@gmail.com">eamounir1@gmail.com</a>
        </p>
        <p>
          <a
            href="https://github.com/MounirEl-Abbas"
            aria-label="View Mounir on GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://github.com/MounirEl-Abbas"
            target="_blank"
            rel="noreferrer"
          >
            github.com/MounirEl-Abbas
          </a>
        </p>
        <p>
          {" "}
          <a
            href="https://www.linkedin.com/in/mounir-el-abbas-04b733212/"
            aria-label="View Mounir on LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.linkedin.com/in/mounir-el-abbas-04b733212/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/mounir-el-abbas
          </a>
        </p>
      </main>
    </section>
  );
};

export default Contact;
