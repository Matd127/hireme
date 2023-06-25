import styled from "styled-components";
import { Wrapper } from "../../UI/WrapperStyle";
import bg from "../../../assets/posting.jpg";

export const PostingHeroWrapper = styled(Wrapper)`
  background-size: cover !important;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(12,14,21, 0.68),
      rgba(12,14,21, 0.68)
    ),
    url(${bg});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  min-height: 25rem;
`

export const HeroTitle = styled.div`
  font-size: 60px;
  font-weight: 500;
  margin-top: 3.5rem;
`