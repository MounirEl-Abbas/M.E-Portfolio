import React from "react";
import { FiMail } from "../assets";
import { AiFillGithub } from "../assets";
import { FaLinkedin } from "../assets";
import Socials from "../navbar/partials/Socials";
const Contact = () => {
  return (
    <footer className="contact page">
      <div>
        <figure>Selfie</figure>
      </div>
      <div>
        <h3>Reach Out to me!</h3>
        <p>Brief paragraph</p>
        <p>I'm a Front-End Developer | React | Typescript</p>
        <p>Location</p>
        <Socials />
        <a href="mailto:eamounir1@gmail.com" aria-label="Email Mounir">
          <FiMail />
          <p>eamounir1@gmail.com</p>
        </a>
      </div>
    </footer>
  );
};

export default Contact;
