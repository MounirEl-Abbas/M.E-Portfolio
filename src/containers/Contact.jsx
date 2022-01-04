import React from "react";
import SocialsIcons from "../components/SocialsIcons";
import { footerInfo } from "../myInfo";
const Contact = () => {
  const { headshot, title, subtitle, role, location } = footerInfo;
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
        <SocialsIcons IconsOnly={true} />
      </div>
    </footer>
  );
};

export default Contact;
