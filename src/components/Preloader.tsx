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
        delay: 1.2,
      })
      .to(containerRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.4,
        ease: 'power2.out',
      });

    gsap.fromTo(
      '.preloader-bar-fill',
      { width: '0%' },
      { width: '100%', duration: 1.5, ease: 'power2.inOut', delay: 0.1 }
    );
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
        <div className="mt-8 w-52 h-1.5 overflow-hidden rounded-full bg-violet/20 mx-auto">
          <div className="preloader-bar-fill h-full rounded-full bg-violet" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
