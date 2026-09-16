import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="relative border-t border-white/5 bg-primary/95 px-6 py-12 md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-display text-2xl font-bold text-cream">
            TECH <span className="bg-violet px-0.5 text-cream">CUBE</span>
          </div>
          <p className="mt-2 text-sm text-cream/30">Digital Experiences - Est. 2025</p>
        </div>

        <div className="flex items-center gap-8 text-sm text-cream/30">
          <a href="#work" className="transition-colors duration-300 hover:text-cream/60">Work</a>
          <a href="#team" className="transition-colors duration-300 hover:text-cream/60">Team</a>
          <a href="#about" className="transition-colors duration-300 hover:text-cream/60">About</a>
          <a href="#contact" className="transition-colors duration-300 hover:text-cream/60">Contact</a>
        </div>

        <button
          type="button"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="group rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-violet/40 hover:bg-violet/10"
        >
          <ArrowUp size={20} className="text-cream/30 transition-colors group-hover:text-violet" />
        </button>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-8 text-center">
        <p className="text-xs tracking-wide text-cream/20">(c) 2025 TECH CUBE. All rights reserved. Made with love and caffeine.</p>
      </div>
    </footer>
  );
};

export default Footer;
