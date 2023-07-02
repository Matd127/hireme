import styled from "styled-components";
import { media } from "../../UI/mediaQueries";

export const JobsStatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  justify-content: center;
  text-align: center;
  padding: 35px 5rem 0 5rem;

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
  font-size: 40px;
  font-weight: bold;
  margin: 0.6rem;
`;

export const Type = styled.p`
  margin: 0;
`;
