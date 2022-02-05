import React from "react";

//info
import { socialLinks } from "../myInfo";
//icons
import { AiFillGithub, FaLinkedinIn, VscFilePdf, IoMdMail } from "../assets";

const SocialsIcons = ({ IconsOnly }) => {
  return (
    <section className="socials">
      {/* All Socials Icons share the following: */}
      <div id="colored-socials">
        <a
          href={`${socialLinks.github}`}
          aria-label="View Mounir on GitHub"
          target="_blank"
          rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href={`${socialLinks.linkedin}`}
          aria-label="View Mounir on LinkedIn"
          target="_blank"
          rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a
          href={`mailto:${socialLinks.email}`}
          aria-label={`Send an Email to ${socialLinks.email}`}>
          <IoMdMail />
        </a>
        {/* Footer social icons ONLY*/}
        {IconsOnly && (
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noreferrer"
            id="resume-icon">
            <VscFilePdf />
          </a>
        )}
      </div>
      {/* Hero social Icons ONLY */}
      {!IconsOnly && (
        <div>
          <a
            href={socialLinks.resume}
            target="_blank"
            rel="noreferrer"
            id="hero-resume-btn">
            <VscFilePdf />
            <span>See My Resume</span>
          </a>
        </div>
      )}
    </section>
  );
};

export default SocialsIcons;
