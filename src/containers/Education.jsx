import React from "react";

//Components
import EducationCard from "../components/EducationCard";
//Icons
import { ImBooks } from "../assets";

const Education = () => {
  return (
    <section className="education">
      <div className="education-content">
        <header>
          <span>
            <ImBooks />
          </span>
          <h2>Education</h2>
        </header>
        <EducationCard />
      </div>
    </section>
  );
};

export default Education;
