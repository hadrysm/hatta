import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapAnimation = (
  startPosition = { y: -20 },
  defaults = { ease: 'power3.out', duration: 1.5, delay: 2 },
) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;

    const tl = gsap.timeline({ defaults: { ...defaults } });

    tl.from(elements, { autoAlpha: 0, ...startPosition, stagger: 0.15 });
  }, [containerRef]);

  return containerRef;
};
