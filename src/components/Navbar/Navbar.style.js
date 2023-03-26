import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  padding: 1rem 2rem;
  border-bottom: 0.01em solid rgba(129, 129, 129, 0.75);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: rgb(226, 226, 226);
  font-size: 40px;
  font-weight: bold;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100% !important;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.5s ease-in;
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: rgb(226, 226, 226);
  margin: 15px;
  font-size: 18px;

  &:hover {
    font-weight: bold;
    scale: calc(1.2);
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 30px;
    background-color: rgb(226, 226, 226);
    margin-bottom: 6px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;