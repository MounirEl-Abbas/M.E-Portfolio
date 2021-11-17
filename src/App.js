//context
import { useAppContext } from "./context/AppContext";

//Components
import ThemeToggle from "./components/utils/ThemeToggle";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/navbar/SideMenu";
import Home from "./components/home/Home";
import DevExperience from "./components/devExperience/DevExperience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

//Icons
import { ImCross } from "./assets/icons";
import { GiHamburgerMenu } from "./assets/icons";

const App = () => {
  const { currentPage, isShowAll, setIsShowAll, isMenuOpen, setIsMenuOpen } =
    useAppContext();
  return (
    <div className="app">
      <div className="app-container">
        <ThemeToggle />
        <div className="portfolio-tabular-view">
          <SideMenu />
          <Navbar />
          {isMenuOpen ? (
            <ImCross id="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} />
          ) : (
            <GiHamburgerMenu
              id="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          )}
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
