import styled from "styled-components";
import bg from "../../assets/background.jpeg";

export const ContentContainer = styled.div`
  background-size: cover !important;
  background-position: top right;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      rgba(3, 24, 38, 0.45),
      rgba(3, 24, 38, 0.75)
    ),
    url(${bg});
  height: 100vh;
`;

export const ContendData = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  justify-content: center;
  align-items: left;
  flex-direction: column;
  color: white;
  /* position: absolute; */
  margin-top: 12%;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 0;
  }
`;

export const ContentTitle = styled.div`
  padding: 15px;
  font-size: 60px;
  font-weight: 800;
  text-align: center;

  @media (max-height: 800px) {
    margin-top: 0;
  }
`;
