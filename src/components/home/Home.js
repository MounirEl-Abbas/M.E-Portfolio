import React from "react";
import HomeBG from "../../assets/images/laptop-outside.jpg";

const Home = () => {
  return (
    <section className="home page-container">
      <article class="img-container">
        <img src={HomeBG} alt="Laptop outside facing a river in a valley." />
      </article>
      <article class="home-intro">
        <h1>Hello!</h1>
        <h5>I'm Mounir El-Abbas, a Front-End Web Developer.</h5>
        <p>
          Thank you for considering <span>ME</span> for your web developer
          needs!
        </p>
        <div class="home-intro-btns">
          <a href="">Some Of My Work</a>
          <a href="">
            More About <span>ME</span>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
