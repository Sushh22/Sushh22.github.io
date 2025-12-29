import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

export default function App() {
  
  return (
    <div className="min-h-screen bg-purple-100 dark:bg-[#1F3A4B] transition-colors duration-300">
      <Header />
      <main>
        <section id="home" className="scroll-mt-24">
          <Home />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}