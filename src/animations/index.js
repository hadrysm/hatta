import gsap from 'gsap';

import { splitTextToChars, createBox } from 'helpers';

// stagger first elemtnt letters, and next node
export const staggerText = ([first, ...rest] = []) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 1, duration: 0.4 } });

  tl.from([splitTextToChars(first), rest], {
    autoAlpha: 0,
    y: -60,
    stagger: 0.1,
  });
};

export const fadeInUpStagger = node => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 2, duration: 1.5 } });

  tl.from(node, {
    y: 30,
    autoAlpha: 0,
    stagger: 0.15,
  });
};

// about page animations
export const staggerRevealAbout = node => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', delay: 1 } });

  tl.from(node, { scaleX: 0, duration: 1.5, transformOrigin: 'left' }).fromTo(
    node.children,
    { autoAlpha: 0, y: -60 },
    { duration: 1, autoAlpha: 1, y: 0, stagger: 0.15 },
    '-=1.5',
  );
};

// home page animations
export const staggerRevealHome = ([contentElements, imageWrapper] = []) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.4, delay: 1 } });

  tl.from(contentElements, {
    y: -60,
    autoAlpha: 0,
    stagger: 0.15,
  }).from(imageWrapper, { scale: 1.6, transformOrigin: 'center' }, '-=3');
};

// Hover on the link and article card
export const handleHover = node => {
  gsap.to(node, {
    duration: 0.3,
    scale: 1.2,
    skewX: 4,
    ease: 'power1.inOut',
  });
};

// Hover off the link
export const handleHoverExit = node => {
  gsap.to(node, {
    duration: 0.3,
    scale: 1,
    skewX: 0,
    ease: 'power1.inOut',
  });
};

// PAGE TRANSITION

export const exitAnimation = color => {
  const { box, body, vw } = createBox(color);

  const tl = gsap.timeline({ defaults: { ease: 'power3.easeInOut' } });

  tl.fromTo(box, { x: -vw }, { duration: 0.5, x: '0' }).to(box, {
    duration: 0.6,
    x: 0,
    onComplete: () => {
      body.removeChild(box);
    },
  });
};

export const enterAnimation = color => {
  const { box, body, vw } = createBox(color);

  const tl = gsap.timeline({ defaults: { ease: 'power3.easeInOut' } });

  tl.to(box, {
    x: vw,
    delay: 0.5,
    duration: 1,
    onComplete: () => {
      body.removeChild(box);
    },
  });
};
