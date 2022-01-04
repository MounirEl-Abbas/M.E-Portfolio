import React from "react";

//Containers
import About from "./containers/About";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Education from "./containers/Education";
import Contact from "./containers/Contact";

//Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { setIsMenuOpen } = useAppContext();

  return (
    <div className="app" id="app">
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
