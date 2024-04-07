import {
  NavWrapper,
  NavBrand,
  NavItem,
  NavMenu,
  Hamburger,
  CloseIcon,
} from "./NavigationStyles";
import { BsList, BsXLg } from "react-icons/bs";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [firstOpen, setFirstOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
    setFirstOpen(true);
  };

  return (
    <NavWrapper>
      <NavBrand to="/">HireMe</NavBrand>

      <Hamburger onClick={openHandler}>
        <BsList size={40} />
      </Hamburger>

      <NavMenu firstOpen={firstOpen} isOpen={isOpen}>
        {isOpen && (
          <CloseIcon onClick={openHandler}>
            <BsXLg color="#ddd" size={40} />
          </CloseIcon>
        )}
        <NavItem to="/">Home</NavItem>
        <NavItem to="/jobs">Jobs</NavItem>
        <NavItem to="/post">Post a job</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavMenu>
    </NavWrapper>
  );
}