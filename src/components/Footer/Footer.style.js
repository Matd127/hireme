import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

export const FooterInnerCotainer = styled.div`
  width: 75%;
  color: white;
`;

export const FooterLogo = styled.div`
  text-align: center;
  color: rgb(226, 226, 226);
  font-size: 25px;
  font-weight: bold;
`;

export const FooterContent = styled.div`
  border-top: 1px solid rgba(129, 129, 129, 0.35);
  border-bottom: 1px solid rgba(129, 129, 129, 0.35);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5%;
  padding: 2rem;


  @media screen and (max-width: 700px){
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
`;

export const FooterItem = styled.div`
  h3 {
    border-bottom: 2px solid red !important;
    border-bottom-width: 10px;
  }

  .info{
    margin-top: 1rem;
    text-align: justify;
  }
`;

export const FooterBottomContent = styled.div`
padding: 2rem;
display: flex;
justify-content: space-around;
`