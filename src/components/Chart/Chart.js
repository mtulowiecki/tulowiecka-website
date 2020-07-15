import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { withRevealAnimation } from 'hoc';

const Chart = ({ className }) => {
  const animation = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      animation.start('show');
    }
  }, [animation, inView]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: ({ x = 0, y = 0 } = {}) => ({
      x: x,
      y: y,
      opacity: 0,
      pathLength: 0,
    }),
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      pathLength: 1,
    },
  };

  return (
    <motion.svg
      ref={ref}
      variants={container}
      initial="hidden"
      animate={animation}
      className={className}
      viewBox="0 0 418 186"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <motion.rect
        variants={item}
        custom={{ y: 20 }}
        x="176"
        y="165"
        width="53"
        height="19"
        fill="#E0F2F9"
      /> */}
      {/* <motion.rect
        variants={item}
        custom={{ y: 20 }}
        x="257"
        y="165"
        width="53"
        height="19"
        fill="#E0F2F9"
      /> */}
      {/* <motion.path variants={item} d="M202 165 l17 -62" stroke="#9492B7" /> */}
      {/* <motion.path variants={item} d="M283 165 l-64 -62" stroke="#9492B7" /> */}
      <motion.rect
        variants={item}
        custom={{ y: 20 }}
        x="219"
        y="165"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
      <motion.path variants={item} d="M245 165 l-26 -62" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ y: 20, x: 0 }}
        x="193"
        y="84"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
      <motion.path variants={item} d="M193 92 l-40 -3" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ x: 120 }}
        x="100"
        y="81"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
      <motion.path variants={item} d="M219 84 l53 -41" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ x: -60, y: 20 }}
        x="272"
        y="33"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
      <motion.path variants={item} d="M325 41 l36 -33" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ x: -60, y: 20 }}
        x="360"
        y="0"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
      <motion.path variants={item} d="M325 41 l40 30" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ x: -60, y: -20 }}
        x="364"
        y="61"
        width="53"
        height="19"
        fill="#E0F2F9"
      />

      <motion.path variants={item} d="M100 89 l-46 -61" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ x: 60, y: 20 }}
        x="1"
        y="20"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
      <motion.path variants={item} d="M100 89 l-43 0" stroke="#9492B7" />
      <motion.rect
        variants={item}
        custom={{ x: 60 }}
        x="4"
        y="81"
        width="53"
        height="19"
        fill="#E0F2F9"
      />
    </motion.svg>
  );
};

export default Chart;
