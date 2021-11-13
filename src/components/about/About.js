import React from "react";
import aboutImg from "../../assets/images/developer.jpg";

const About = () => {
  return (
    <section className="about page-container">
      <figure className="img-container">
        <img
          src={aboutImg}
          alt="Electronics on a bed with 'developer' written on the phone screen."
        />
      </figure>
      <article class="about-info">
        <h2>
          About <span>ME</span>
        </h2>
        <p>
          Goal-oriented, enthusiastic front-end developer. Passionate for
          user-friendly website development and eager to learn.
        </p>
        <aside class="unrelated">
          As you've probably noticed I'm obsessed with my initials. I built a
          gaming PC and never played any games on it. My other hobbies include
          lifting weights so I don't break the aforementioned computer...
          Ironic, I know, and I like to read - yes, for fun.
        </aside>
        <p className="related">
          I'm Mounir El-Abbas (Moe for short), although my path in formal
          education has taken many twists and turns — I've never stopped
          engaging my passion to help others and solve problems. I’ve always
          sought out opportunities and challenges. I enrolled in Biological
          Sciences at the University of Windsor on account of it's diffculty and
          learned the value of hard work. Additionaly, Robotics Programming at
          St.Clair College made clear the desirability of practical knowledge.
          Finally, I've found something that is truly meaningful to me. As a web
          developer I enjoy applying my obsessive attention to detail, and am
          encouraged to be my perfectionist self. With that said, I am extremely
          grateful for your interest in me and I look forward to meeting
          like-minded individuals.
        </p>
        <br />

        <div class="quotes">
          <h3>Quotes</h3>

          <blockquote>
            “First, solve the problem. Then, write the code.” – John Johnson
          </blockquote>
          <blockquote>
            "Man is not disturbed by things, but of the views he takes of them."
            -Epictetus
          </blockquote>
        </div>
      </article>
    </section>
  );
};

export default About;
