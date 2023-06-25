import styled from "styled-components";
import bg from "../../../assets/background.jpeg";
import { Wrapper } from "../../UI/WrapperStyle";
import { media } from "../../UI/mediaQueries";

export const HeroWrapper = styled(Wrapper)`
  background-size: cover !important;
  background-position: top right;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(12,14,21, 0.68),
      rgba(12,14,21, 0.68)
    ),
    url(${bg});
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HeroTitle = styled.div`
  font-size: 60px;
  font-weight: 500;
  margin-top: 2rem;

  ${media.small`
    margin-top: 0;
  `}
`
export const HeroSubTitle = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-top: 1.5rem;


`