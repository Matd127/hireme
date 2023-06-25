import { Link } from "react-router-dom";
import { InnerWrapper } from "../../UI/WrapperStyle";
import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { keyframes } from "styled-components";

export const NavWrapper = styled(InnerWrapper)`
  padding: 2rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavBrand = styled.div`
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
`;

const menuAniamtion = keyframes`
 0% { transform: translateX(768px); }
 100% { transform: translateX(0); }
 `;

const closeAnimation = keyframes`
 0% { transform: translateX(0); }
 100% { transform: translateX(768px); }
 `;

export const NavMenu = styled.div`
  display: flex;

  transition: ${(props) => (props.isOpen ? "transform 5s ease-in-out" : "")};

  ${(props) =>
    props.isOpen &&
    media.medium`
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
    animation-name: ${menuAniamtion};
    animation-duration: 1s;
    animation-iteration-count: 1;
    `}

  ${(props) =>
    !props.isOpen &&
    media.medium`
    position: fixed;
    top: 0;
    left: ${props.firstOpen ? 0 : '768px'};
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
    animation-name: ${props.firstOpen ? closeAnimation : ''};
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

  ${media.medium`
    display: flex;
  `}
`;
