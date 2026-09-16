import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  direction = 'left',
  speed = 20,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tl = gsap.to(el, {
      x: direction === 'left' ? '-50%' : '0%',
      duration: speed,
      repeat: -1,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden py-4 bg-white/5 border-y border-white/5">
      <div className="whitespace-nowrap flex">
        <div
          ref={marqueeRef}
          className="flex gap-12 text-2xl md:text-4xl lg:text-5xl font-display font-bold text-cream/10 tracking-wider"
        >
          {Array(6)
            .fill(text)
            .map((item, i) => (
              <span key={i} className="inline-block">
                {item}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
