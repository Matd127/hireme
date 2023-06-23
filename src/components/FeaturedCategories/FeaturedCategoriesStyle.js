import { media } from "../UI/mediaQueries";
import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const FeaturedCategoriesTitle = styled.h2`
  color: #2f2f2f;
  font-size: 40px;
  text-align: center;
`;

export const FeaturedCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  justify-content: center;
  grid-gap: 2rem;

  ${media.xlarge`
  grid-template-columns: repeat(2, 330px);
  `}

  ${media.medium`
    grid-template-columns: repeat(1, 330px);
  `}

  ${media.xsmall`
    grid-template-columns: repeat(1, 250px);
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
    padding: 1.5rem;
    border: 1px solid #DEE2E6;
    color: ${props => (props.theme === 'dark' ? '#ddd' : '#2f2f2f')};
    background-color: ${props => (props.theme === 'dark' ? '#333333' : 'inherit')};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    border-radius: 3px;

    &:hover {
        transition: 0.3s;
        transform: translateY(-10px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.08);
    }
`;

export const FeaturedCardTitle = styled.h3`
    font-size: 24px;
    text-align: center;
`

export const FeaturedCardText = styled.p`
    font-size: 16px;
    text-align: center;

`