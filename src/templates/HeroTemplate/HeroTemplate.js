import React from 'react';
import styled from 'styled-components';
import { media } from 'utils';

import Blob from 'components/Blob/Blob';

import heroSVG from 'assets/svgs/hero.svg';

const HeroWrapper = styled.div`
  padding: 130px 20px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  ${media.tablet`
  padding: 130px 50px;
  `}

  ${media.laptop`
  height: 100vh;
  flex-direction: row-reverse;
  `}
`;

const TextWrapper = styled.div`
  margin: 60px 0 0;
  max-width: 460px;

  ${media.tablet`
  margin: 0;
  `}
`;

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Paragraph = styled.p`
  width: max-content;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: solid ${({ theme }) => theme.gray} 1px;
`;

const SvgWrapper = styled.div`
  position: relative;
  max-width: 450px;

  ${media.laptop`
  width: 40vw;
  max-width: none;
  `}
`;

const StyledHeroSvg = styled(heroSVG)`
  width: 100%;
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
  height: 85%;
  width: 100%;
  z-index: -1;
`;

const HeroTemplate = ({ content: { heading, author } }) => (
  <HeroWrapper>
    <SvgWrapper>
      <StyledHeroSvg />
      <StyledBlob />
    </SvgWrapper>
    <TextWrapper>
      <Heading>{heading}</Heading>
      <Paragraph>{author}</Paragraph>
    </TextWrapper>
  </HeroWrapper>
);

export default HeroTemplate;
