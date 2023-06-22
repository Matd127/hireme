import {
  NavWrapper,
  NavBrand,
  NavItem,
  NavMenu,
  Hamburger,
} from "./NavigationStyles";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavWrapper>
      <NavBrand>HireMe</NavBrand>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <BsList size={40} />
      </Hamburger>

      <NavMenu isOpen={isOpen}>
        {isOpen && <BsXLg size={40} onClick={() => setIsOpen(!isOpen)} />}
        <NavItem to="./">Home</NavItem>
        <NavItem to="./">Jobs</NavItem>
        <NavItem to="./">Contact</NavItem>
      </NavMenu>
    </NavWrapper>
  );
};

export default Navigation;
