import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGridAnimation = (duration = 1.5, delay = 2) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration, delay } });

    gsap.set(elements, { autoAlpha: 0, y: -20 });

    tl.to(elements, { autoAlpha: 1, y: 0, stagger: 0.15 });
  }, [containerRef]);

  return containerRef;
};
