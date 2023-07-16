import { css } from "styled-components";
import { media } from "../mediaQueries";

export const InputStyle = css`
  border: 1px solid #ddd;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 5px;
  padding: 10px 20px;
  color: rgb(51, 51, 51);

  &:focus {
    outline: none;
  }

  ${media.medium`
    width: auto;
  `}
`;
