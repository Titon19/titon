import Navbar from "../Layouts/Navbar";
import Hero from "../Layouts/Hero";
import About from "../Layouts/About";
import Projects from "../Layouts/Project";
import Skills from "../Layouts/Skill";
import Contact from "../Layouts/Contact";
import Footer from "../Layouts/Footer";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
