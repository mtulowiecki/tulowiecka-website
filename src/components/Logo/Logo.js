import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const LogoWrapper = styled(motion.div)`
  position: relative;
  width: min-content;
`;

const Circle = styled(motion.div)`
  position: absolute;
  top: 2.5px;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  ${({ red }) =>
    red &&
    css`
      background-color: #c93565;
    `}
  ${({ blue }) =>
    blue &&
    css`
      background-color: #338fff;
    `};
`;

const LogoText = styled(motion.p)`
  padding-left: 30px;
  margin: 0;
  color: #002c6f;
  font-size: 22px;
  font-family: 'Maven Pro', sans-serif;
  font-weight: 800;
`;

const Logo = () => {
  const circles = {
    hidden: { opacity: 0 },
    show: custom => ({
      x: custom,
      opacity: 0.6,
    }),
  };

  const text = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <LogoWrapper whileHover={{ scale: 1.05 }}>
      <Circle
        red
        custom={-5}
        initial="hidden"
        animate={'show'}
        variants={circles}
      />
      <Circle
        blue
        custom={5}
        initial="hidden"
        animate={'show'}
        variants={circles}
      />
      <LogoText initial="hidden" animate="show" variants={text}>
        Tułowiecka
      </LogoText>
    </LogoWrapper>
  );
};

export default Logo;
