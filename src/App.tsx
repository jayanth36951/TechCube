import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import ProjectDetail from './components/ProjectDetail';
import { Route, Routes } from 'react-router-dom';

const HomePage = () => (
  <>
    <Hero />
    <Marquee text="CREATIVE DEVELOPMENT • DIGITAL EXPERIENCES • WEB DESIGN • MOTION • 3D • INTERACTION •" />
    <About />
    <Services />
    <Marquee text="AWARD-WINNING • INNOVATIVE • EXPERIMENTAL • FUTURE-FORWARD • BOLD •" direction="right" />
    <Projects />
    <Team />
    <Contact />
    <Footer />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <Preloader />}
      <Navigation />
      <main className="relative bg-primary overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:projectId" element={<ProjectDetail />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
