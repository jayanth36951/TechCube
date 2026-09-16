import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 40, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15 },
          '-=0.4'
        );
    }
  }, [inView]);

  const stats = [
    { value: '10+', label: 'Projects' },
    { value: '4', label: 'Creators' },
    { value: '∞', label: 'Ideas' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-primary via-primary/95 to-primary/90 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
        >
          <span className="text-cream">We turn</span>
          <br />
          <span className="text-clip bg-gradient-to-r from-violet via-cyan to-green bg-clip-text">
            ideas into digital
          </span>
          <br />
          <span className="text-cream">experiences.</span>
        </h2>

        <p
          ref={descRef}
          className="mt-8 max-w-3xl text-cream/50 text-base md:text-lg leading-relaxed font-light"
        >
          We are a group of designers, developers, and creative people who like turning ideas into
          digital experiences. We believe in the power of bold design, meaningful interaction, and
          storytelling that sticks.
        </p>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-white/10 pt-6"
            >
              <div className="text-4xl md:text-6xl font-display font-bold text-cream">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-cream/40 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-white/5 bg-white/5 p-8 md:p-12">
          <h3 className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-cream/30">
            Project Ownership & Responsibilities
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-cyan/20 bg-cyan/5 p-6">
              <div className="font-mono text-sm text-cyan">01</div>
              <h4 className="mt-2 font-display text-lg font-bold text-cream">Nikhilesh</h4>
              <p className="text-sm font-medium text-cyan/70">Project & Technical Lead</p>
              <p className="mt-2 text-xs text-cream/40">Requirements, task breakdown, coordination, code review, technical sign-off</p>
            </div>
            <div className="rounded-xl border border-green/20 bg-green/5 p-6">
              <div className="font-mono text-sm text-green">02</div>
              <h4 className="mt-2 font-display text-lg font-bold text-cream">Meera</h4>
              <p className="text-sm font-medium text-green/70">Web Development Lead</p>
              <p className="mt-2 text-xs text-cream/40">Website architecture, frontend, backend integration, testing, deployment, maintenance</p>
            </div>
            <div className="rounded-xl border border-violet/20 bg-violet/5 p-6">
              <div className="font-mono text-sm text-violet">03</div>
              <h4 className="mt-2 font-display text-lg font-bold text-cream">Jayanth</h4>
              <p className="text-sm font-medium text-violet/70">Research, Content & Product Support</p>
              <p className="mt-2 text-xs text-cream/40">Research, content preparation, documentation, competitor analysis, support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
