import React from "react";
import { educationInfo } from "../myInfo";

const EducationCard = () => {
  let uniqueKey = 0;
  return (
    <div className="education-container">
      {educationInfo.map(education => (
        <article key={education.id}>
          <h2>{education.schoolName}</h2>
          <h4>{education.subHeader}</h4>
          <p>{education.duration}</p>
          <p>{education.desc}</p>
          {education.descBullets.map(bullet => {
            uniqueKey++;
            return <p key={uniqueKey}>{bullet}</p>;
          })}
        </article>
      ))}
    </div>
  );
};

export default EducationCard;
