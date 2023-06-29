import { Wrapper } from "../../UI/WrapperStyle";
import styled from "styled-components";
import bg from "../../../assets/search-background.jpg";

export const JobsHeroWrapper = styled(Wrapper)`
  background-size: cover !important;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(12, 14, 21, 0.68),
      rgba(12, 14, 21, 0.68)
    ),
    url(${bg});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  min-height: 25rem;
`;