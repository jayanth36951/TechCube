import { useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <Link
      to={`/work/${project.id}`}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-violet/40 transition-all duration-500 cursor-pointer"
    >
      <div
        className="w-full h-64 md:h-56 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs text-violet/70 font-mono">
            {project.year}
          </span>
          <span className="w-1 h-1 rounded-full bg-violet/30" />
          <span className="text-xs text-cream/40 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-display font-bold text-cream group-hover:text-violet transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-cream/50 group-hover:text-cream/70 transition-colors duration-300">
          {project.description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <ExternalLink size={16} className="text-violet/50 group-hover:text-violet transition-colors" />
          <span className="text-xs text-cream/30 group-hover:text-cream/50 transition-colors">
            View Project
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
