import React from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo/Logo';

const NavbarWrapper = styled.nav`
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Navbar = () => (
  <NavbarWrapper>
    <Logo />
  </NavbarWrapper>
);

export default Navbar;
