import styled from "styled-components";
import { media } from "../../UI/mediaQueries";

export const SectionTitle = styled.h2`
  color: ${props => (props.theme === "dark" ? "#ddd" : "#333333")};
  font-size: 4rem;
  text-align: center;

  ${media.xsmall`
    font-size: 3rem;
  `}
`;