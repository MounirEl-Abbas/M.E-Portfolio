import React from "react";
import HomeBG from "../../assets/images/home-img.jpg";
import { useAppContext } from "../../context/AppContext";

const Home = () => {
  const { handleChangePage } = useAppContext();
  return (
    <section className="page-container home-page-container">
      <header className="home-page-content">
        <h1>Hello!</h1>
        <p>I'm Mounir El-Abbas, a Front-End Web Developer.</p>
        <p>
          Thank you for considering
          <span className="initials" title="My Initials">
            {` ME `}
          </span>
          for your Web Development needs!
        </p>

        <div className="home-page-btns">
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
      </header>
      <figure className="home-img">
        <img src={HomeBG} alt="Laptop outside facing a river in a valley." />
      </figure>
    </section>
  );
};

export default Home;
