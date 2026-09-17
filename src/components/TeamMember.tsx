import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, Github, Linkedin, Instagram, Globe } from 'lucide-react';
import type { TeamMember as Member } from '../data/team';

interface TeamMemberProps {
  member: Member;
  isExpanded: boolean;
  onExpand: () => void;
}

const TeamMember = ({ member, isExpanded, onExpand }: TeamMemberProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isExpanded ? 'hidden' : 'auto';
    if (isExpanded) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'power4.out' }
      );
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  const handleMouseEnter = () => {
    if (!isExpanded) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
        borderColor: member.accentColor,
        boxShadow: `0 0 40px ${member.accentColor}20`,
      });
    }
  };

  const handleMouseLeave = () => {
    if (!isExpanded) {
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
        borderColor: 'rgba(255,255,255,0.1)',
        boxShadow: 'none',
      });
    }
  };

  const socialIcons = [
    { key: 'github', icon: Github },
    { key: 'linkedin', icon: Linkedin },
    { key: 'instagram', icon: Instagram },
    { key: 'website', icon: Globe },
  ] as const;

  return (
    <>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onExpand}
        className="group relative h-[320px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-violet/40"
      >
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-70" />
        <div
          className="absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-xs"
          style={{ borderColor: `${member.accentColor}40`, color: member.accentColor, backgroundColor: `${member.accentColor}10` }}
        >
          {member.tag}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mb-1 font-mono text-sm" style={{ color: member.accentColor }}>
            {String(member.id).padStart(2, '0')}
          </div>
          <h3 className="font-display text-xl font-bold text-cream transition-colors duration-300 group-hover:text-violet">
            {member.name}
          </h3>
          <p className="text-sm text-cream/40 transition-colors duration-300 group-hover:text-cream/60">
            {member.role}
          </p>
        </div>
      </div>

      {isExpanded && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-xl md:p-8"
        >
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-white/5">
            <button
              type="button"
              aria-label={`Close ${member.name} details`}
              onClick={onExpand}
              className="absolute right-4 top-2 z-10 rounded-full bg-black/40 p-2 text-cream shadow-lg shadow-black/30 transition-colors duration-300 hover:bg-black/60 sm:top-4"
            >
              <X size={24} className="text-cream" />
            </button>

            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-10">
              <div>
                <div
                  className="aspect-square w-full rounded-2xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
              </div>
              <div>
                <div className="mb-2 font-mono text-sm text-violet/60">
                  {String(member.id).padStart(2, '0')}
                </div>
                <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">{member.name}</h2>
                <p className="mt-1 text-lg font-medium text-violet/60">{member.role}</p>
                <p className="mt-4 leading-relaxed text-cream/60">{member.about}</p>
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-cream/30">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-violet/20 bg-violet/10 px-3 py-1 text-xs text-violet/70">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-medium uppercase tracking-wider text-cream/30">Connect</h4>
                  <div className="flex gap-3">
                    {socialIcons.map(({ key, icon: Icon }) => {
                      const url = member.social[key];
                      if (!url) return null;
                      return (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${key}`}
                          className="rounded-full border border-white/10 p-2 transition-all duration-300 hover:border-violet/40 hover:bg-violet/10"
                        >
                          <Icon size={18} className="text-cream/60 transition-colors hover:text-violet" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamMember;
