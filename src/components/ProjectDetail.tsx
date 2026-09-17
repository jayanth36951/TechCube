import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === Number(projectId));

  const handleBack = () => {
    const savedPosition = sessionStorage.getItem('techcube-return-to-work');

    if (savedPosition) {
      sessionStorage.setItem('techcube-return-to-work', savedPosition);
    } else {
      const workSection = document.getElementById('work');
      const workY = workSection ? workSection.getBoundingClientRect().top + window.scrollY : 0;
      sessionStorage.setItem('techcube-return-to-work', String(Math.max(workY, 0)));
    }

    navigate('/');
  };

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="min-h-screen bg-primary px-6 pb-24 pt-32 md:px-12 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={handleBack}
          className="group inline-flex items-center gap-2 text-sm text-cream/50 transition-colors hover:text-cream"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to selected work
        </button>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream/40">
              <span className="text-violet">{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-violet/60" />
              <span>{project.category}</span>
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-cream md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-cream/55 lg:pb-2">
            {project.description}
          </p>
        </div>

        <div
          className={`mt-16 aspect-[16/9] w-full rounded-2xl border border-white/10 md:mt-24 ${
            project.title === 'Heritage Archive' ? 'project-heritage-animated-detail' : ''
          }`}
          style={
            project.title === 'Heritage Archive'
              ? undefined
              : { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
          }
          role="img"
          aria-label={`${project.title} project preview`}
        />

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-10 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-violet">Project details</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-white/10 px-3 py-2 text-xs text-cream/60">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">An idea made tangible.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/50">
              We shaped every part of this {project.category.toLowerCase()} experience around clarity, character, and meaningful interaction. The result is a focused digital space that gives the work room to be seen and remembered.
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-violet"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectDetail;
