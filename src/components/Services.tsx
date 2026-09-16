import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: 'Web Design', description: 'Beautiful, functional interfaces that users love.' },
    { title: 'Web Development', description: 'Fast, scalable, and future-proof code.' },
    { title: 'UI/UX', description: 'Human-centered design that drives results.' },
    { title: 'Branding', description: 'Visual identities that tell your story.' },
    { title: 'Motion Design', description: 'Animation that brings ideas to life.' },
    { title: '3D Experiences', description: 'Immersive, interactive 3D worlds.' },
    { title: 'E-Commerce', description: 'Online stores that convert and scale.' },
    { title: 'Creative Development', description: 'Experimental, award-winning digital work.' },
  ];

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        gridRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.08 },
        '-=0.6'
      );
    }
  }, [inView]);

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-primary/95 to-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-cream"
        >
          What we
          <br />
          <span className="text-clip bg-gradient-to-r from-cyan via-violet to-green bg-clip-text">
            build for you.
          </span>
        </h2>

        <div
          ref={gridRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-primary/80 hover:bg-white/5 transition-all duration-500 cursor-default border border-white/5 hover:border-violet/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet/0 to-cyan/0 group-hover:from-violet/5 group-hover:to-cyan/5 transition-all duration-700" />
              <div className="relative z-10">
                <div className="text-sm text-violet/60 font-mono mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-cream group-hover:text-violet transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-cream/40 group-hover:text-cream/60 transition-colors duration-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
