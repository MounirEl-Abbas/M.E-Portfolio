import React from "react";

//Containers
import Navigation from "./containers/Navigation";
import About from "./containers/About";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Education from "./containers/Education";
import Contact from "./containers/Contact";

//Components
// import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="app" id="app">
      {/* <ScrollToTop /> */}
      <Navigation />
      <main className="pages">
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
