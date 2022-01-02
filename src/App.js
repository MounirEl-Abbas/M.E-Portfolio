import React from "react";
//Components
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import ScrollToTop from "./components/utils/ScrollToTop";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { setIsMenuOpen } = useAppContext();

  return (
    <div className="app" id="app" onScroll={() => setIsMenuOpen(false)}>
      <ScrollToTop />
      <div className="container">
        <Navbar />
        <main
          className="pages"
          id="pages-container"
          onClick={() => setIsMenuOpen(false)}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
