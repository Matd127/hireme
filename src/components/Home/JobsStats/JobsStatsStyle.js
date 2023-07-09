import styled from "styled-components";
import { media } from "../../UI/mediaQueries";

export const JobsStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  justify-content: center;
  text-align: center;
  padding: 3.5rem 0 0 0;

  ${media.medium`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin: 1.5rem;
`;

export const Type = styled.p`
  margin: 0;
  font-size: 1.8rem;
`;
