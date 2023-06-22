import { css } from "styled-components";
import { breakpoints } from "./breakpoints";

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${breakpoints[label]}px) {
        ${css(...args)}
      }
    `;
    return accumulator;
  }, {});