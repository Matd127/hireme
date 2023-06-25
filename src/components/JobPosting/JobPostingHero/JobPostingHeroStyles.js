import styled from "styled-components";
import { Wrapper } from "../../UI/WrapperStyle";
import bg from "../../../assets/background.jpeg";

export const PostingHeroWrapper = styled(Wrapper)`
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
`