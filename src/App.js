//Components
import ThemeToggle from "./components/utils/ThemeToggle";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MenuBtn from "./components/navbar/partials/MenuBtn";

const App = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <MenuBtn />

      <div className="container">
        <Navbar />
        <main className="pages">
          <About />
          <Experience />
          <Contact />
        </main>
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
