import styled from "styled-components";
import { themeLight, themeDark } from "./themes";
import { media } from "./mediaQueries";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => (props.theme === "dark" ? themeDark : themeLight )}
  padding-bottom: 30px;
  font-size: 1.6rem;
`;

export const InnerWrapper = styled.div`
  width: 75%;

  ${media.xsmall`
    width: 85%;
  `}
`;