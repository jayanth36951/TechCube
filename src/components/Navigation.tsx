import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.mobile-menu',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.mobile-menu-item',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks = ['WORK', 'TEAM', 'ABOUT', 'CONTACT'];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 transition-all duration-500 ${
          scrolled ? 'bg-primary/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-display font-bold tracking-tight text-cream">
            TECH <span className="bg-violet px-0.5 text-cream">CUBE</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-cream/70 hover:text-cream transition-colors duration-300 tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream focus:outline-none z-50 relative"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={`mobile-menu fixed inset-0 z-40 bg-primary/98 backdrop-blur-xl flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-4xl md:text-6xl font-display font-bold">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="mobile-menu-item text-cream/80 hover:text-cream transition-colors duration-300 hover:scale-110 transform"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
