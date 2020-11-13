import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapAnimation = (
  startPosition = { y: -20, autoAlpha: 0 },
  defaults = { ease: 'power3.out', duration: 1.5, delay: 2 },
) => {
  const containerRef = useRef(null);

  const tl = gsap.timeline({ defaults: { ...defaults } });

  useEffect(() => {
    const elements = containerRef.current.children;

    tl.from(elements, { ...startPosition, stagger: 0.15 });
  }, [containerRef]);

  return containerRef;
};
