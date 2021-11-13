//Context
import AppContextProvider from "./context/AppContext";

//Components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import DevExperience from "./components/devExperience/DevExperience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <AppContextProvider>
      <div className="container">
        <Navbar />
        <Home />
        <DevExperience />
        <About />
        <Contact />
      </div>
    </AppContextProvider>
  );
};

export default App;

/* 
https://www.drewrawitz.com/#/
https://andrewborstein.com/
https://www.ngoako.com/index.html#about
*/
