import React, { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

import AboutInfo from "./partials/AboutInfo";
import AboutSocials from "./partials/AboutSocials";

const About = () => {
  const { handleChangePage } = useAppContext();
  return (
    <main className="hero">
      <AboutInfo />
      <AboutSocials />
    </main>
  );
};

export default About;

/* <div className="quotes">
          <blockquote>
            “First, solve the problem. Then, write the code.”
            <cite>-John Johnson</cite>
          </blockquote>
          <div id="quote-sep"></div>
          <blockquote>
            "Man is not disturbed by things, but of the views he takes of them."
            <cite>-Epictetus</cite>
          </blockquote>
        </div> */
