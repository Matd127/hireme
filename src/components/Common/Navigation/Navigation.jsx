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
        {isOpen && <BsXLg size={40} onClick={openHandler} />}
        <NavItem to="/">Home</NavItem>
        <NavItem to="/jobs">Jobs</NavItem>
        <NavItem to="/post">Post a job</NavItem>
        <NavItem to="./">Contact</NavItem>
      </NavMenu>
    </NavWrapper>
  );
};

export default Navigation;
