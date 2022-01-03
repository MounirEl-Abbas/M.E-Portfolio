import React from "react";
import resume from "../../../assets/ME-Resume.pdf";
//icons
import {
  AiFillGithub,
  FaLinkedin,
  VscFilePdf,
  HiDownload,
  MdOpenInNew,
} from "../../../assets";
const Socials = () => {
  return (
    <section className="navbar-socials">
      <ul>
        <li>
          <a
            href="https://github.com/MounirEl-Abbas"
            aria-label="View Mounir on GitHub"
            target="_blank"
            rel="noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mounir-el-abbas-04b733212/"
            aria-label="View Mounir on LinkedIn"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={resume} target="_blank" rel="noreferrer">
            <VscFilePdf />
            <span>Resume</span>
          </a>
          <div id="resume-btns-container">
            <p>Resume</p>
            <div>
              <a
                href={resume}
                aria-label="open resume in new tab"
                target="_blank"
                rel="noreferrer">
                <i>
                  <MdOpenInNew />
                </i>
              </a>
              <a href={resume} download={resume} aria-label="download resume">
                <HiDownload />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Socials;
