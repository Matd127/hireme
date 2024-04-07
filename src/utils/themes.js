import { css } from "styled-components";
import { colorLight, colorDark, backgroundLight, backgroundDark } from "./variables";

export const themeLight = css`
  background-color: ${backgroundLight};
  color: ${colorLight};
`;

export const themeDark = css`
  background-color: ${backgroundDark};
  color: ${colorDark};
`