import styled from "styled-components";

export const ContactCardList = styled.div`
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-gap: 2rem;
  place-content: center;
`;

export const ContactCardWrapper = styled.div`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 2.4rem;
  display: grid;
  place-items: center;
  border-radius: 0.3rem;
  transition: all .5s;

  &:hover {
    color: #fff;
    background-color: #333333;
    transform: translateY(-1rem);
  }
`;

export const ContactCardIcon = styled.div`
  font-size: 3rem;
`;

export const ContactCardTtile = styled.h2`
  padding: 1rem;
`;

export const ContactCardText = styled.p`
  text-align: center;
`;
