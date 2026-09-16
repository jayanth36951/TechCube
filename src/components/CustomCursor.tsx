import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      isMobile.current = true;
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      gsap.set(cursor, {
        x: mouseX - 6,
        y: mouseY - 6,
      });

      gsap.set(follower, {
        x: currentX - 20,
        y: currentY - 20,
      });

      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 2, duration: 0.3, ease: 'power3.out' });
      gsap.to(follower, { scale: 1.5, duration: 0.3, ease: 'power3.out', opacity: 0.3 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3, ease: 'power3.out' });
      gsap.to(follower, { scale: 1, duration: 0.3, ease: 'power3.out', opacity: 0.15 });
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    const links = document.querySelectorAll('a, button, .cursor-hover');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  if (isMobile.current) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[999] w-3 h-3 rounded-full bg-violet mix-blend-difference"
      />
      <div
        ref={followerRef}
        className="fixed pointer-events-none z-[998] w-10 h-10 rounded-full border border-cream/20 bg-cream/5 backdrop-blur-sm"
      />
    </>
  );
};

export default CustomCursor;
