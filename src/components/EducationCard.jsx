import React from "react";
import { educationInfo } from "../myInfo";

const EducationCard = () => {
  return (
    <div>
      {educationInfo.map(education => (
        <>
          <h2>{education.schoolName}</h2>
          <h4>{education.subHeader}</h4>
          <p>{education.duration}</p>
          <p>{education.desc}</p>
          {education.descBullets.map(bullet => (
            <p>{bullet}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default EducationCard;
