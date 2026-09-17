import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power4.out' }
    )
      .to(textRef.current, {
        opacity: 0,
        y: -30,
        scale: 1.1,
        duration: 0.6,
        ease: 'power4.in',
        delay: 1.8,
      })
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power2.out',
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] bg-primary flex items-center justify-center"
    >
      <div ref={textRef} className="text-center">
        <div className="text-6xl md:text-8xl font-display font-bold text-cream tracking-tight">
          TECH <span className="text-[#6B66DA]">CUBE</span>
        </div>
        <div className="mt-4 text-cream/40 text-sm tracking-[0.3em] uppercase">
          Loading Experience
        </div>
        <div className="mt-8 w-48 h-[1px] bg-violet/30 mx-auto overflow-hidden">
          <div className="w-full h-full bg-violet animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
