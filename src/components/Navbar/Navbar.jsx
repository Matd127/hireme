import React, { useState } from "react";
import { NavContainer, Logo, Menu, MenuLink, Hamburger } from "./Navbar.style";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Logo to="/">HireMe</Logo>
      
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>

      <Menu isOpen={isOpen}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/jobs">Jobs</MenuLink>
        <MenuLink to="/contact">Contact</MenuLink>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
