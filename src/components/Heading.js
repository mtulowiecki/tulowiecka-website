import styled from 'styled-components';
import { media } from 'src/utils';

const Heading = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  ${media.laptop`
    margin: 3.75rem 0 2rem;
    font-size: ${({ theme }) => theme.fontSize.l};
  `}

  ${media.laptopL`
    font-size: ${({ theme }) => theme.fontSize.xl};
  `}
`;

export default Heading;
