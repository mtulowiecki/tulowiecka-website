import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { media } from 'src/utils';

import Logo from 'src/components/Logo';

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 900;
`;

const LinksWrapper = styled.div`
  display: none;
  grid-gap: 5rem;
  margin-right: 15rem;

  ${media.laptop`
    display: flex;
  `}
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const Navbar = () => (
  <StyledNav>
    <Logo />
    <LinksWrapper>
      <StyledLink to="services" smooth>
        Usługi
      </StyledLink>
      <StyledLink to="about" smooth>
        O nas
      </StyledLink>
      <StyledLink to="contact" smooth>
        Kontakt
      </StyledLink>
    </LinksWrapper>
  </StyledNav>
);

export default Navbar;
