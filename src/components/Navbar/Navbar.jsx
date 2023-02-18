import React, { useState } from "react";
import { NavContainer, Logo, Menu, MenuLink, Hamburger } from "./Navbar.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo href="/">HireMe</Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/">Jobs</MenuLink>
        <MenuLink href="/">Jobs</MenuLink>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
