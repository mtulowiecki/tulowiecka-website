import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export const withRevealAnimation = Component => {
  return props => {
    const animation = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        animation.start('visible');
      }
    }, [animation, inView]);
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={animation}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -20, opacity: 0 },
        }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
};
