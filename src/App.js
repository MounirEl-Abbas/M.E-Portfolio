import React from "react";

//Containers
import Navigation from "./containers/Navigation";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Education from "./containers/Education";
import Contact from "./containers/Contact";

//Components
import ScrollToTop from "./components/ScrollToTop";
import { useAppContext } from "./context/AppContext";

const App = () => {
  return (
    <div className="app" id="app">
      <ScrollToTop />
      <div className="container" id="container">
        <Navigation />
        <main className="pages" id="pages-container">
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
