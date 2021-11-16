import React from "react";
import contactImg from "../../assets/images/contactImg.jpg";
import { FiMail } from "../../assets/icons";
import { AiFillGithub } from "../../assets/icons";
import { FaLinkedin } from "../../assets/icons";
import { useAppContext } from "../../context/AppContext";
const Contact = () => {
  const { isShowAll } = useAppContext();

  return (
    <section className="page-container contact-page">
      <header>
        <h2>
          Contact <span className="initials">ME</span>
        </h2>
      </header>
      <figure className="img-container contact-img">
        <img
          src={contactImg}
          alt="Electronics on a bed with 'developer' written on the phone screen."
        />
      </figure>
      <main className="page-content contact-page-content">
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
