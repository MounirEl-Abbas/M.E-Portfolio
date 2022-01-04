import React from "react";
//icons
import { AiFillGithub, FaLinkedin, VscFilePdf } from "../assets";
import { FiMail } from "../assets";
import { footerInfo, socialLinks } from "../myInfo";

const SocialsIcons = ({ IconsOnly }) => {
  return (
    <section className="socials">
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
        <FaLinkedin />
      </a>
      <div>
        {!IconsOnly ? (
          <a href={socialLinks.resume} target="_blank" rel="noreferrer">
            <VscFilePdf />
            <span>See My Resume</span>
          </a>
        ) : (
          <>
            <a href={socialLinks.resume} target="_blank" rel="noreferrer">
              <VscFilePdf />
            </a>
            <a
              href={`mailto:${footerInfo.email}`}
              aria-label={`Send an Email to ${footerInfo.email}`}>
              <FiMail />
            </a>
          </>
        )}
      </div>
    </section>
  );
};

export default SocialsIcons;
