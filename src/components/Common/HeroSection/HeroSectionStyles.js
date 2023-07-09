import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { Wrapper } from "../../UI/WrapperStyle";
import { pageColor } from "../../UI/variables";

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
  min-height: 30rem;
`;

export const HeroSectionTitle = styled.div`
  font-size: 6rem;
  font-weight: 500;
  margin-top: 3.2rem;
  color: ${pageColor};

  ${media.small`
  font-size: 5rem;
  `}
`;
