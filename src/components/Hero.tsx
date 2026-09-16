import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.3 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 },
        '-=0.6'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        bgRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.5 },
        '-=1.2'
      );

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          x: x * 0.5,
          y: y * 0.3,
          duration: 1,
          ease: 'power2.out',
        });
      }
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          x: x * -0.1,
          y: y * -0.1,
          duration: 1.5,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-violet/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan/5 blur-3xl" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-green/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-6 inline-block px-4 py-1.5 border border-cream/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-xs tracking-[0.2em] uppercase text-cream/50">
            Digital Experience Agency
          </span>
        </div>

        <h1
          ref={titleRef}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight"
        >
          <span className="text-cream">WE DON'T JUST</span>
          <br />
          <span className="text-clip bg-gradient-to-r from-violet via-cyan to-green bg-clip-text">
            BUILD WEBSITES.
          </span>
          <br />
          <span className="text-cream/80 text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 block">
            WE BUILD <span className="text-violet">EXPERIENCES.</span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-8 text-cream/50 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
        >
          We're a collective of designers, developers, and creative minds who turn bold ideas into
          immersive digital realities. No templates. No limits.
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative px-8 py-4 bg-violet text-primary font-medium rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet to-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-cream/20 text-cream/70 hover:text-cream hover:border-cream/40 rounded-full transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        <div className="mt-20 flex justify-center animate-bounce">
          <a href="#about" className="text-cream/30 hover:text-cream/60 transition-colors duration-300">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
