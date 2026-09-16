import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
      );
    }
  }, [inView]);

  return (
    <section
      id="work"
      ref={ref}
      className="relative py-24 md:py-32 px-6 bg-primary/95 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight"
        >
          <span className="text-cream">Selected</span>
          <br />
          <span className="text-clip bg-gradient-to-r from-violet via-cyan to-green bg-clip-text">
            Work.
          </span>
        </h2>

        <div
          ref={containerRef}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
