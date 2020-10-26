import styled from 'styled-components';
import { Element } from 'react-scroll';
import { media } from 'src/utils';

const SectionTemplate = styled(Element)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  scroll-snap-align: start;

  ${media.laptop`
    padding: 2rem;
  `}
`;

export default SectionTemplate;
