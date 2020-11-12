import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useFadeInAnimation = (startPosition = { y: -20 }) => {
  const containerRef = useRef(null);

  const getFinishPosition = () => {
    const finishPosition = Object.entries(startPosition).reduce((acc, [key]) => {
      return {
        ...acc,
        [key]: key === 'scale' ? 1 : 0,
      };
    }, {});

    return finishPosition;
  };

  useEffect(() => {
    const elements = containerRef.current.children;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.5, delay: 1.5 } });

    gsap.set(elements, { autoAlpha: 0, ...startPosition });

    tl.to(elements, { autoAlpha: 1, ...getFinishPosition(), stagger: 0.15 });
  }, [containerRef]);

  return containerRef;
};
