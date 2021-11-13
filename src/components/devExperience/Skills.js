import React from "react";

const Skills = () => {
  return (
    <article className="skills" style={{ border: "3px solid red" }}>
      <h2>Skills</h2>
      <ul class="skills-fundamentals" title="Fundamentals">
        {/* ul[title]::before {
        content:attr(title)
        } */}
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
      <ul class="skills-additional" title="Noteworthy Additional Skills">
        <li>Redux</li>
        <li>Typescript</li>
        <li>Sass</li>
        <li>Git</li>
      </ul>
      <ul class="skills-inprogress" title="Currently Learning">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
      </ul>
      <h4>Why am I learning back-end?</h4>
      <p>
        Understanding how APIs function under the hood, how query parameters are
        developed, as well as HTTP requests (CRUD operations) have proven
        beneficial in the advancement of my front-end knowledge. I will shift my
        focus back to front-end frameworks and/or libraries shortly.
      </p>
    </article>
  );
};

export default Skills;
