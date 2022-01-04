import React from "react";
import { FiMail } from "../assets";
import Socials from "../components/Socials";
import { footerInfo } from "../myInfo";
const Contact = () => {
  const { headshot, title, subtitle, role, location, email } = footerInfo;
  return (
    <footer className="contact">
      <div>
        <figure>
          <img src={headshot} alt="" />
        </figure>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{role}</p>
        <p>{location}</p>
        <Socials />
        <a href={`mailto:${email}`} aria-label={`Send an Email to ${email}`}>
          <FiMail />
        </a>
      </div>
    </footer>
  );
};

export default Contact;
