import About from "../sections/About";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Journey from "../sections/Journey";
import TeckStack from "../sections/TeckStack";
import Stats from "../sections/Stats";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center scroll-smooth">
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Journey />
        <TeckStack />
        <Stats />
        <Contact />
        <Footer />
      </main>
    </main>
    
  );
}