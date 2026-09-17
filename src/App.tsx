import { useEffect, useState } from 'react';
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
import { Route, Routes, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const workPosition = sessionStorage.getItem('techcube-return-to-work');

      if (!workPosition) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        });
        return;
      }

      requestAnimationFrame(() => {
        window.scrollTo({
          top: Number(workPosition),
          left: 0,
          behavior: 'auto',
        });
      });

      sessionStorage.removeItem('techcube-return-to-work');
      return;
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }, [location.pathname]);

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
