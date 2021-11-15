//context
import { useAppContext } from "./context/AppContext";

//Components
import ThemeToggle from "./components/utils/ThemeToggle";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import DevExperience from "./components/devExperience/DevExperience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import { ImCross } from "./assets/icons";

const App = () => {
  const { currentPage, isShowAll, setIsShowAll } = useAppContext();
  return (
    <div className="app">
      <ThemeToggle />
      {isShowAll && (
        <button id="remove-show-all-btn" onClick={() => setIsShowAll(false)}>
          <ImCross />
        </button>
      )}
      <div className="app-container">
        {isShowAll ? (
          <div className="show-all">
            <Home />
            <DevExperience />
            <About />
            <Contact />
          </div>
        ) : (
          <div className="portfolio">
            <Navbar />
            {currentPage === "home" ? (
              <Home />
            ) : currentPage === "experience" ? (
              <DevExperience />
            ) : currentPage === "about" ? (
              <About />
            ) : (
              <Contact />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

/* 
https://www.drewrawitz.com/#/
https://andrewborstein.com/
https://www.ngoako.com/index.html#about
*/
