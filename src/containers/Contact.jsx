import React from "react";
import SocialsIcons from "../components/SocialsIcons";
import { footerInfo } from "../myInfo";
import { MdLocationOn } from "../assets";
const Contact = () => {
  const { headshot, title, subtitle, role, location } = footerInfo;
  return (
    <footer className="contact">
      <div className="contact-content">
        <figure>
          <img src={headshot} alt="" />
        </figure>
        <div className="contact-info">
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
          <p>{role}</p>
          <span>
            <MdLocationOn />
            {location}
          </span>
          <SocialsIcons IconsOnly={true} />
        </div>
      </div>
    </footer>
  );
};

export default Contact;
