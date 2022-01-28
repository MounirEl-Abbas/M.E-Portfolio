import React from "react";
//icons
import { AiFillGithub, FaLinkedinIn, VscFilePdf, IoMdMail } from "../assets";
import { footerInfo, socialLinks } from "../myInfo";

const SocialsIcons = ({ IconsOnly }) => {
  return (
    <section className="socials">
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
          href={`mailto:${footerInfo.email}`}
          aria-label={`Send an Email to ${footerInfo.email}`}>
          <IoMdMail />
        </a>
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
