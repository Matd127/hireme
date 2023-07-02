import { Link } from "react-router-dom";
import { InnerWrapper, Wrapper } from "../../UI/WrapperStyle";
import styled, { css } from "styled-components";
import { media } from "../../UI/mediaQueries";
import { menuAniamtion, closeAnimation } from "./NavigationAnimations";

const mobileMenu = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  background-color: rgb(19, 23, 30);
  margin: 0;
  overflow: hidden;
  z-index: 1;
`;

export const NavWrapper = styled(InnerWrapper)`
  background-color: transparent;
  padding: 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavBrand = styled(Link)`
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
  color: #ddd;
`;

export const NavMenu = styled.div`
  display: flex;
  ${(props) =>
    props.isOpen &&
    media.large`
    ${mobileMenu}
    animation-name: ${menuAniamtion};
    animation-duration: 1s;
    animation-iteration-count: 1;
    `}

  ${(props) =>
    !props.isOpen &&
    media.large`
    ${mobileMenu}
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
  margin: 15px;
  font-size: 24px;

  &:hover {
    transition: 1s ease-in;
    text-decoration: underline;
  }
`;

export const Hamburger = styled.div`
  display: none;
  padding: 10px;
  cursor: pointer;

  ${media.large`
    display: flex;
  `}
`;