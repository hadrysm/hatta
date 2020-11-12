import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { gsap } from 'gsap';
import TransitionLink from 'gatsby-plugin-transition-link';

const createBox = bgColor => {
  const { body } = document;

  const box = document.createElement('div');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  box.style.zIndex = '999999';
  box.style.position = 'fixed';
  box.style.bottom = 0;
  box.style.backgroundColor = bgColor;
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  body.appendChild(box);
  return { box, body, vw };
};

const PageTransitionProviders = ({ children, to }) => {
  const { colors } = useContext(ThemeContext);

  const exitAnimation = () => {
    const { box, body, vw } = createBox(colors.primary);

    const tl = gsap.timeline({ defaults: { ease: 'power3.easeInOut' } });

    tl.fromTo(box, { x: -vw }, { duration: 0.5, x: '0' }).to(box, {
      duration: 0.6,
      x: 0,
      onComplete: () => {
        body.removeChild(box);
      },
    });
  };

  const enterAnimation = () => {
    const { box, body, vw } = createBox(colors.primary);
    const tl = gsap.timeline({ defaults: { ease: 'power3.easeInOut' } });

    tl.to(box, {
      x: vw,
      delay: 0.5,
      duration: 0.5,
      onComplete: () => {
        body.removeChild(box);
      },
    });
  };

  return (
    <TransitionLink
      to={to}
      exit={{
        trigger: ({ exit, node }) => exitAnimation(exit, node),
        length: 0.5,
      }}
      entry={{
        delay: 0.5,
        trigger: ({ exit, node }) => enterAnimation(exit, node),
      }}
    >
      {children}
    </TransitionLink>
  );
};

PageTransitionProviders.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  to: PropTypes.string.isRequired,
};

export default PageTransitionProviders;
