import React, { useState, useEffect } from "react";
import aboutImg from "../../assets/images/aboutImg.jpg";
import typing1 from "../../assets/framebyframe/typing1.PNG";
import typing2 from "../../assets/framebyframe/typing2.PNG";
import typing3 from "../../assets/framebyframe/typing3.PNG";
import typing4 from "../../assets/framebyframe/typing4.PNG";
import typing5 from "../../assets/framebyframe/typing5.PNG";
import typing6 from "../../assets/framebyframe/typing6.PNG";
import typing7 from "../../assets/framebyframe/typing7.PNG";
import typing8 from "../../assets/framebyframe/typing8.PNG";
import typing9 from "../../assets/framebyframe/typing9.PNG";
import typing10 from "../../assets/framebyframe/typing10.PNG";
import typing11 from "../../assets/framebyframe/typing11.PNG";
import typing12 from "../../assets/framebyframe/typing12.PNG";
import typing13 from "../../assets/framebyframe/typing13.PNG";
import typing14 from "../../assets/framebyframe/typing14.PNG";
import { useAppContext } from "../../context/AppContext";

const About = () => {
  const { isShowAll } = useAppContext();
  const typingImages = {
    1: typing1,
    2: typing2,
    3: typing3,
    4: typing4,
    5: typing5,
    6: typing6,
    7: typing7,
    8: typing8,
    9: typing9,
    10: typing10,
    11: typing11,
    12: typing12,
    13: typing13,
    14: typing14,
  };
  const [currentImage, setCurrentImage] = useState(typing1);

  const switchFrames = (imgTag) => {
    let n = 1;
    setInterval(() => {
      if (n >= 14) {
        n = 0;
      }
      n++;
      let nextImg = typingImages[n];
      setCurrentImage(nextImg);
    }, 100);
    clearInterval();
  };

  useEffect(() => {
    const frameImg = document.getElementById("frameByFrameImg");
    switchFrames(frameImg);
  }, []);

  return (
    <section className="page-container">
      <header>
        <h2>
          About <span className="initials">ME</span>
        </h2>
      </header>
      <figure className="about img-container">
        <img
          src={aboutImg}
          alt="Electronics on a bed with 'developer' written on the phone screen."
        />
      </figure>
      <main className="about-page page-content">
        <img src={currentImage} id="frameByFrameImg"></img>
        <h2>
          Goal-oriented, enthusiastic front-end developer. Passionate for
          intuitive and comprehensible website development.
        </h2>

        <section className="related">
          <p>I'm Mounir El-Abbas (Moe for short).</p>
          <p>
            Although my path in formal education has taken many twists and
            turns, I've never stopped engaging my passion of helping others and
            solving problems.
          </p>
          <p>
            I’ve always sought out opportunities and challenges. I enrolled in
            Biological Sciences at the University of Windsor on account of it's
            difficulty and learned the value of hard work. Additionally,
            Robotics Programming at St. Clair College made clear the
            desirability of practical knowledge. Finally, I've found something
            that is truly meaningful to me. As a web developer I am encouraged
            to apply my obsessive attention to detail and perfectionism.
          </p>
          <p>
            I am extremely grateful for your interest in me and I look forward
            to meeting like-minded individuals.
          </p>
        </section>
        <br />

        <div className="quotes">
          <blockquote>
            “First, solve the problem. Then, write the code.”
            <cite>-John Johnson</cite>
          </blockquote>
          <div></div>
          <blockquote>
            "Man is not disturbed by things, but of the views he takes of them."
            <cite>-Epictetus</cite>
          </blockquote>
        </div>
      </main>
    </section>
  );
};

export default About;
