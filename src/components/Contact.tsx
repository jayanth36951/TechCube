import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { Mail, Instagram, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(titleRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 }).fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.6'
      );
    }
  }, [inView]);

  const handleHover = () => {
    gsap.to(buttonRef.current, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  };

  const handleLeave = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-primary/95 to-primary px-6 py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl text-center">
        <h2 ref={titleRef} className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-8xl">
          <span className="text-cream">Ready to</span>
          <br />
          <span className="text-clip bg-gradient-to-r from-violet via-cyan to-green bg-clip-text">Create</span>
          <br />
          <span className="text-cream">Something unforgettable?</span>
        </h2>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center gap-8">
          <a
            ref={buttonRef}
            href="mailto:techcube333@gmail.com"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-violet px-10 py-5 text-lg font-medium text-primary transition-all hover:shadow-2xl hover:shadow-violet/25"
          >
            <span className="relative z-10">Book a Call</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet to-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </a>

          <div className="mt-4 flex items-center gap-6">
            <a href="mailto:techxcube333@gmail.com" aria-label="Email Tech Cube" className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-violet/40 hover:bg-violet/10">
              <Mail size={20} className="text-cream/60 transition-colors hover:text-violet" />
            </a>
            <a href="https://instagram.com/tech_cube._" target="_blank" rel="noreferrer" aria-label="Tech Cube Instagram" className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-violet/40 hover:bg-violet/10">
              <Instagram size={20} className="text-cream/60 transition-colors hover:text-violet" />
            </a>
            <a href="https://github.com/Tech-x-Cube" target="_blank" rel="noreferrer" aria-label="Tech Cube GitHub" className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-violet/40 hover:bg-violet/10">
              <Github size={20} className="text-cream/60 transition-colors hover:text-violet" />
            </a>
            <a href="https://www.linkedin.com/company/awardstudio" target="_blank" rel="noreferrer" aria-label="Tech Cube LinkedIn" className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:border-violet/40 hover:bg-violet/10">
              <Linkedin size={20} className="text-cream/60 transition-colors hover:text-violet" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
