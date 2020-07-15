import React from 'react';
import { media } from 'utils';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Blob from 'components/Blob/Blob';
import Card from 'components/Card/Card';
import DetailedText from 'components/DetailedText/DetailedText';

const ServicesWrapper = styled.div`
  padding: 20px;
  width: 100%;

  ${media.tablet`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  `}

  ${media.laptop`
  height: 100vh;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  `}
`;

const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.laptop`
    width: 40%;
  `}
`;

const StyledBlob = styled(Blob)`
  position: absolute;
  top: -10%;
  height: 110%;
  width: 140%;

  ${media.laptop`
  top: -20%;
  right: 0;
  height:140%;
  `};

  ${({ decor }) =>
    decor &&
    css`
      display: none;
      stroke: ${({ theme }) => theme.dark};
      stroke-width: 0.1;
      transform: scale(1.05);

      & path {
        fill: none;
      }

      ${media.laptop`
      display: block;
      `}
    `}
`;

const Decor = styled(motion.div)`
  display: none;
  position: absolute;
  top: 5%;
  right: 30%;
  height: 70px;
  width: 70px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.light};
  opacity: 0.5;

  ${media.laptop`
    display: block;
  `}

  ${({ second }) =>
    second &&
    css`
      top: 100%;
      right: 35%;
    `}
`;

const StyledColumn = styled.div`
  width: 45%;
  max-width: 200px;

  ${({ second }) =>
    second &&
    css`
      margin: 60px 0 0 40px;
    `}
`;

const DetailedWrapper = styled.div`
  max-width: 550px;
  margin: 0 auto;

  ${media.laptop`
  margin: 0;
  width: 40%;
  `};
`;

const ServicesTemplate = ({ content: { cards, detailed } }) => {
  return (
    <ServicesWrapper>
      <CardsWrapper>
        <StyledBlob />
        <StyledBlob decor />
        <Decor
          animate={{ rotate: 360 }}
          transition={{
            loop: Infinity,
            duration: 10,
          }}
        />
        <Decor
          animate={{ rotate: 360 }}
          transition={{
            loop: Infinity,
            duration: 20,
          }}
          second
        />
        <StyledColumn>
          <Card key={cards[0]} value={cards[0]} />
          <Card key={cards[1]} value={cards[1]} darkBackground />
          <Card key={cards[2]} value={cards[2]} />
        </StyledColumn>
        <StyledColumn second>
          <Card key={cards[3]} value={cards[3]} darkBackground />
          <Card key={cards[4]} value={cards[4]} />
        </StyledColumn>
      </CardsWrapper>
      <DetailedWrapper>
        <DetailedText
          heading={detailed[0].heading}
          paragraph={detailed[0].paragraph}
        />
        <DetailedText
          heading={detailed[1].heading}
          paragraph={detailed[1].paragraph}
        />
      </DetailedWrapper>
    </ServicesWrapper>
  );
};

export default ServicesTemplate;
