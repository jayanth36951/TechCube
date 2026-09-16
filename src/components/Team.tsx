import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import TeamMember from './TeamMember';
import { teamMembers } from '../data/team';

const Team = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      ).fromTo(
        containerRef.current?.children || [],
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.1 },
        '-=0.6'
      ).fromTo(
        flowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.3'
      );
    }
  }, [inView]);

  const flowSteps = [
    { name: 'Nikhilesh', role: 'DESIGN + FRONTEND', color: '#06B6D4' },
    { name: 'Meera', role: 'MOTION + 3D', color: '#A3E635' },
    { name: 'Jayanth', role: 'BACKEND + SYSTEMS', color: '#8B5CF6' },
    { name: 'EXPERIENCE', role: 'DIGITAL EXPERIENCE', color: '#F5F5F0' },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/95 to-primary px-6 py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/5 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl">
        <h2
          ref={titleRef}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-cream">Our</span>
          <br />
          <span className="text-clip bg-gradient-to-r from-cyan via-violet to-green bg-clip-text">
            Creative System.
          </span>
        </h2>

        <div
          ref={containerRef}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              member={member}
              isExpanded={selectedId === member.id}
              onExpand={() => setSelectedId(selectedId === member.id ? null : member.id)}
            />
          ))}
        </div>

        <div ref={flowRef} className="mt-20 rounded-3xl border border-white/5 bg-white/5 p-8 md:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-xs uppercase tracking-[0.3em] text-cream/30">From Idea to Experience</h3>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-2">
            {flowSteps.map((step, index) => (
              <div key={step.name} className="contents">
                <div className="group flex flex-col items-center gap-2">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full border-2 text-2xl font-bold transition-all duration-300 group-hover:scale-110 md:h-20 md:w-20"
                    style={{ borderColor: step.color, color: step.color, backgroundColor: `${step.color}10` }}
                  >
                    {step.name === 'EXPERIENCE' ? '*' : step.name[0]}
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-bold tracking-wider" style={{ color: step.color }}>{step.name}</div>
                    <div className="text-[10px] uppercase tracking-wider text-cream/30">{step.role}</div>
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="flex w-full flex-1 items-center justify-center px-2 md:w-auto">
                    <div className="relative h-[2px] w-full max-w-[60px]">
                      <div
                        className="absolute inset-0 animate-pulse"
                        style={{ background: `linear-gradient(90deg, ${flowSteps[index].color}, ${flowSteps[index + 1].color})` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
