//Components
import ThemeToggle from "./components/utils/ThemeToggle";
import Navbar from "./components/navbar/Navbar";
import Experience from "./components/experience/Experience";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MenuBtn from "./components/navbar/partials/MenuBtn";

import { useAppContext } from "./context/AppContext";

const App = () => {
  const { setIsMenuOpen } = useAppContext();
  return (
    <div className="app" onScroll={() => setIsMenuOpen(false)}>
      <ThemeToggle />
      <MenuBtn />

      <div className="container">
        <Navbar />
        <main className="pages" onClick={() => setIsMenuOpen(false)}>
          <About />
          <Experience />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
