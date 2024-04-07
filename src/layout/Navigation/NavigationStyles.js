import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { media } from "../../utils/mediaQueries";
import { menuAniamtion, closeAnimation } from "./NavigationAnimations";

const MobileMenu = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  background-color: rgb(19, 23, 30);
  margin: 0;
  overflow: hidden;
  z-index: 1;
`;

export const NavWrapper = styled.nav`
  width: 75%;
  background-color: transparent;
  padding: 3.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ${media.xsmall`
    padding: 2rem;
    width: 85%;
  `}
`;

export const NavBrand = styled(Link)`
  text-decoration: none;
  font-size: 4rem;
  font-weight: bold;
  text-decoration: none;
  color: #ddd;
`;

export const NavMenu = styled.div`
  display: flex;
  ${(props) =>
    props.isOpen &&
    media.large`
    ${MobileMenu}
    animation-name: ${menuAniamtion};
    animation-duration: 1s;
    animation-iteration-count: 1;
    `}

  ${(props) =>
    !props.isOpen &&
    media.large`
    ${MobileMenu}
    left: ${props.firstOpen ? 0 : "992px"};
    animation-name: ${props.firstOpen ? closeAnimation : ""};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    `}
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: #dddddd;
  margin: 1.5rem;
  font-size: 2.4rem;

  &:hover {
    transition: 1s ease-in;
    text-decoration: underline;
  }
`;

export const Hamburger = styled.div`
  display: none;
  padding: 1rem;
  cursor: pointer;
  color: #ddd;

  ${media.large`
    display: block;
  `}
`;

export const CloseIcon = styled.div`
  padding: 1rem;
  display: none;

  ${media.large`
    display: block;
  `}
`;
