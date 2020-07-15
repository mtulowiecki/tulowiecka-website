import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

import AboutSVG from 'assets/svgs/about.svg';

import Chart from 'components/Chart/Chart';
import DetailedText from 'components/DetailedText/DetailedText';

const AboutWrapper = styled.div`
  padding: 40px 20px 20px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
  justify-content: space-around;
  `}

  ${media.laptop`
  padding: 40px;
  height: 100vh;
  width: 100%;
  flex-direction: row-reverse;

  `}
`;

const SvgWrapper = styled.div`
  position: relative;
  width: 80%;
  max-width: 450px;

  ${media.laptop`
  width: 45%;
  max-width: none;
  `}
`;

const StyledChart = styled(Chart)`
  position: absolute;
  bottom: 70%;
  left: -10%;
  height: 60%;
  max-height: 150px;
  width: 100%;
  z-index: -1;

  ${media.laptop`
  max-width: none;
  bottom: 80%;
  `}
`;

const StyledDetailedText = styled(DetailedText)`
  ${media.laptop`
  width: 40%;
  `}
`;

const AboutTemplate = ({ content: { heading, paragraph } }) => (
  <AboutWrapper>
    <SvgWrapper>
      <AboutSVG />
      <StyledChart />
    </SvgWrapper>
    <StyledDetailedText heading={heading} paragraph={paragraph} />
  </AboutWrapper>
);

export default AboutTemplate;
