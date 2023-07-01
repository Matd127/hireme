import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { Wrapper } from "../../UI/WrapperStyle";

export const HeroSectionWrapper = styled(Wrapper)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  background-image: linear-gradient(
      rgba(12, 14, 21, 0.68),
      rgba(12, 14, 21, 0.68)
    ),
    url(${(props) => props.bg});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  min-height: 25rem;
`;

export const HeroSectionTitle = styled.div`
  font-size: 60px;
  font-weight: 500;
  margin-top: 2rem;

  ${media.small`
    margin-top: 0;
  `}
`