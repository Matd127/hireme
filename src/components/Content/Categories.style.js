import styled from "styled-components";

export const CategoriesContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CategoriesTitle = styled.div`
  text-align: center;
  color: white;
  font-size: 18px;
  padding: 5px;
`;

export const CategoriesItemsCotainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.34);
  display: flex;
  justify-content: center;
`;

export const CategoriesItems = styled.div`
  width: 75%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (max-width: 1400px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 920px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px){
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CategoriesItem = styled.div`
  color: white;
  text-align: center;
  height: 100%;
  /* width: 220px; */
  height: 170px;
  border-right: 0.1px solid rgba(255, 255, 255, 0.14);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-left: ${({ isFirst }) =>
    isFirst ? "0.1px solid rgba(255, 255, 255, 0.14)" : "none"};

  div {
    padding: 5px;
  }

  &:hover {
    color: white !important;
    transition: all 200ms ease-in;
    transform: scale(1.2);
    background-color: rgb(236, 53, 67);
    border: none;
  }
`;
export const CategoriesIcon = styled.div`
  color: white;
  font-size: 40px;
`;
