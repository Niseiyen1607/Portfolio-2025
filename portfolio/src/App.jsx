import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologie from "./components/Technologie";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AuroraHero } from "./components/AuroraHero"; 

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <AuroraHero /> 
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologie />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
