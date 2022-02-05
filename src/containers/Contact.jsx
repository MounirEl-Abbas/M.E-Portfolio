import React from "react";

//Components
import SocialsIcons from "../components/SocialsIcons";
//Info
import { footerInfo } from "../myInfo";
//Icons
import { MdLocationOn } from "../assets";

const Contact = () => {
  const { headshot, title, subtitle, role, location } = footerInfo;
  return (
    <footer className="contact">
      <div className="contact-content">
        <figure>
          <img src={headshot} alt="Headshot of Mounir El-Abbas" />
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
