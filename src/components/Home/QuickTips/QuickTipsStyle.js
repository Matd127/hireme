import styled from "styled-components";
import { media } from "../../UI/mediaQueries";

export const TipsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  ${media.large`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const TipsCard = styled.div`
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  color: #333;
`;

export const TipsCardImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover !important;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 300px;
  width: 100%;
`;

export const TipsCardTitle = styled.h3`
  font-size: 24px;
  color: rgba(67, 152, 212, 1);
  margin: 0;
  padding: 1rem;
`;

export const TipsCardText = styled.p`
  margin: 0;
  padding: 0 1.6rem 2rem 1.6rem;
`;