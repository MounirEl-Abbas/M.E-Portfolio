import React from "react";
import HomeBG from "../../assets/images/home-img.jpg";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const { handleChangePage } = useAppContext();
  return (
    <section className="home page-container">
      <figure className="home img-container">
        <img src={HomeBG} alt="Laptop outside facing a river in a valley." />
      </figure>
      <article className="home-intro">
        <h1>Hello!</h1>
        <p>I'm Mounir El-Abbas, a Front-End Web Developer.</p>
        <p>
          Thank you for considering
          <span className="initials" title="My Initials">
            {` ME `}
          </span>
          for your Web Development needs!
        </p>
        <div className="home-intro-btns">
          <a
            href="#experience"
            onClick={(e) => handleChangePage(e)}
            name="experience"
          >
            View My Work
          </a>
          <a href="#about" onClick={(e) => handleChangePage(e)} name="about">
            More About <span className="initials">ME</span>
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
