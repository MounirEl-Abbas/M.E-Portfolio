//Components
import ThemeToggle from "./components/utils/ThemeToggle";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/experience/Skills";
import Projects from "./components/experience/Projects";
import Contact from "./components/contact/Contact";
import MenuBtn from "./components/navbar/partials/MenuBtn";
import ScrollToTop from "./components/utils/ScrollToTop";
import { useAppContext } from "./context/AppContext";
const App = () => {
  const { setIsMenuOpen } = useAppContext();

  return (
    <div className="app" id="app" onScroll={() => setIsMenuOpen(false)}>
      <ThemeToggle />
      <MenuBtn />
      <ScrollToTop />

      <div className="container">
        <Navbar />
        <main className="pages" onClick={() => setIsMenuOpen(false)}>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
