import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { media } from 'utils';

const StyledElement = styled(Element)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  scroll-snap-align: start;

  ${media.laptop`
    padding: 2rem;
  `}
`;

const SectionTemplate = ({ name, className, children }) => (
  <StyledElement name={name} className={className}>
    {children}
  </StyledElement>
);

export default SectionTemplate;
