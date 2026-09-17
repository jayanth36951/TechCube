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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 md:px-6"
    >
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/10 blur-3xl animate-pulse md:h-[800px] md:w-[800px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan/5 blur-3xl" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-green/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 w-full max-w-[360px] md:max-w-7xl md:text-center">
        <div className="relative mx-auto overflow-hidden rounded-[26px] border border-cyan-400/60 bg-[#050505] p-4 shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_0_28px_rgba(168,85,247,0.25)] md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none">
          <div className="mb-5 flex items-center justify-between md:hidden">
            <div className="text-lg font-black tracking-tight text-cream">
              TECH <span className="bg-violet px-1 text-cream">CUBE</span>
            </div>
            <button
              type="button"
              aria-label="Open menu"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cream"
            >
              <span className="flex flex-col gap-[4px]">
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
                <span className="block h-[2px] w-4 rounded-full bg-current" />
              </span>
            </button>
          </div>

          <div className="mb-5 hidden md:block md:text-center">
            <div className="mb-6 inline-block rounded-full border border-cream/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-[0.2em] text-cream/50">
                Digital Experience Agency
              </span>
            </div>
          </div>

          <h1
            ref={titleRef}
            className="font-display font-black leading-[0.9] tracking-[-0.06em] text-cream md:text-center md:text-5xl md:sm:text-7xl md:lg:text-9xl"
          >
            <span className="block text-[2.15rem] md:text-5xl md:text-7xl md:lg:text-8xl">
              WE DON'T JUST
            </span>
            <span className="mt-1 block text-[2.15rem] text-clip bg-gradient-to-r from-violet via-cyan to-green bg-clip-text md:text-5xl md:text-7xl md:lg:text-8xl">
              BUILD WEBSITES.
            </span>
            <span className="mt-1 block text-[2.15rem] text-cream/90 md:text-4xl md:text-6xl md:lg:text-7xl">
              WE BUILD <span className="text-violet">EXPERIENCES.</span>
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-5 max-w-[20rem] text-center text-[0.72rem] leading-relaxed text-cream/50 md:mx-auto md:mt-8 md:max-w-2xl md:text-sm md:text-base"
          >
            We're a collective of designers, developers, and creative minds who turn bold ideas into
            immersive digital realities. No templates. No limits.
          </p>

          <div ref={ctaRef} className="mt-6 flex flex-col items-center gap-3 md:mt-12 md:flex-row md:justify-center">
            <a
              href="#work"
              className="group relative w-full max-w-[250px] overflow-hidden rounded-full bg-violet px-6 py-3 text-center text-sm font-medium text-primary transition-all hover:scale-[1.02] md:w-auto md:px-8 md:py-4"
            >
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet to-cyan opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="w-full max-w-[250px] rounded-full border border-cream/20 px-6 py-3 text-center text-sm text-cream/70 transition-all duration-300 hover:border-cream/40 hover:text-cream md:w-auto md:px-8 md:py-4"
            >
              Let's Talk
            </a>
          </div>

          <div className="mt-8 flex justify-center pb-2 md:mt-20 md:pb-0">
            <a href="#about" className="text-cream/30 transition-colors duration-300 hover:text-cream/60">
              <ArrowDown size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
