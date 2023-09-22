import styled from "styled-components";
import { media } from "../../UI/mediaQueries";

export const TipsCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3.2rem;

  ${media.large`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const TipsCard = styled.div`
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.06);
  border-radius: 0.3rem;
  color: #333;
`;

export const TipsCardImage = styled.img`
  min-height: 30rem;
  width: 100%;
`;

export const TipsCardTitle = styled.h3`
  font-size: 2.4rem;
  color: rgba(67, 152, 212, 1);
  margin: 0;
  padding: 1.6rem;
`;

export const TipsCardText = styled.p`
  margin: 0;
  font-size: 1.5rem;
  padding: 0 2.5rem 3.2rem 2.5rem;
`;