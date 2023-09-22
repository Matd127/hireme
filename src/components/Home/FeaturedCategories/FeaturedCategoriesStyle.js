import { media } from "../../UI/mediaQueries";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FeaturedCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 300px));
  justify-content: center;
  grid-gap: 3.2rem;

  ${media.xxlarge`
  grid-template-columns: repeat(auto-fill, minmax(250px, 300px));
  `}

  ${(props) =>
    props.animate &&
    css`
      opacity: 0.5;
      transform: translateY(50px);
      animation: ${fadeIn} 1s ease-in-out forwards;
    `}
`;

export const FeaturedCard = styled.div`
  padding: 2.4rem;
  border: 1px solid #dee2e6;
  color: ${(props) => (props.theme === "dark" ? "#ddd" : "#2f2f2f")};
  background-color: ${(props) =>
    props.theme === "dark" ? "#333333" : "inherit"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
    transform: translateY(-10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`;

export const FeaturedCardTitle = styled.h3`
  margin: 2rem;
  font-size: 2.4rem;
  text-align: center;
`;

export const FeaturedCardText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin: 1.6rem;
`;

export const ErrorMessage = styled.p`
  text-align: center;
`