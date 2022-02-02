import React from "react";
import { educationInfo } from "../myInfo";

const EducationCard = () => {
  let uniqueKey = 0;
  return (
    <div className="education-container">
      {educationInfo.map(education => (
        <article className="education-card" key={education.id}>
          <h3>{education.schoolName}</h3>
          <h5>{education.subHeader}</h5>
          <span>{education.duration}</span>
          <p>{education.desc}</p>
          <ul>
            {education.descBullets.map(bullet => {
              uniqueKey++;
              return <li key={uniqueKey}>{bullet}</li>;
            })}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default EducationCard;
