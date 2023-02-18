import styled from "styled-components";
import bg from "../../assets/background.jpeg";

export const ContentContainer = styled.div`
  background-size: cover !important;
  background-image: linear-gradient(rgba(41, 55, 65, 0.48),rgba(61, 81, 94, 0.55)), url(${bg});
`;

export const ContendData = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5vh;
  min-height: 45vh;
  font-size: 60px;
  color: white;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const ContentTitle = styled.div`
  padding: 15px;
  margin-top: 2rem;
`;
