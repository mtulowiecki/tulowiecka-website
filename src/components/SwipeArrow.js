import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useIntersectionObserver } from '@researchgate/react-intersection-observer';
import {
  motion,
  useViewportScroll,
  useAnimation,
  useTransform,
} from 'framer-motion';

const StyledLink = styled(Link)`
  position: absolute;
  left: calc(50% - 14px);
  bottom: 2rem;
  cursor: pointer;
`;

const SwipeArrow = () => {
  const arrowControls = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const handleChange = entry => {
    if (entry.isIntersecting) {
      arrowControls.start({
        y: ['-30%', '30%', '-30%'],
        transition: {
          duration: 2,
          repeat: Infinity,
          type: 'spring',
        },
      });
    } else arrowControls.stop();
  };

  const [ref] = useIntersectionObserver(handleChange);

  return (
    <StyledLink to="services" smooth>
      <motion.svg
        ref={ref}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={arrowControls}
        style={{ opacity }}
      >
        <path
          d="M10.6667 0.666687H17.3333V15.6667L23.1667 9.83335L27.2 13.8667L14 27.0667L0.799988 13.8667L4.83332 9.83335L10.6667 15.6667V0.666687Z"
          fill="#012E6D"
        />
      </motion.svg>
    </StyledLink>
  );
};

export default SwipeArrow;
