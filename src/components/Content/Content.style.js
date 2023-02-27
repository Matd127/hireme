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
  min-height: 100vh;
`;

export const ContendData = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  color: white;
  margin-top: 10%;

  @media (max-width: 768px) {
    font-size: 40px;
    margin-top: 0;
  }
`;

export const ContentTitle = styled.div`
  padding: 15px;
  margin: 5px;
  font-size: 60px;
  font-weight: 500;
  text-align: center;

  @media (max-height: 800px) {
    margin-top: 0;
  }
`;

export const ContendDescription = styled.div`
  padding: 15px;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  color: rgb(226, 226, 226);
`
