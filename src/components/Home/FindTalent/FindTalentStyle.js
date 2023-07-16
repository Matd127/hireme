import styled from "styled-components";
import { DefaultButton } from "../../UI/styles/ButtonStyle";
import { Link } from "react-router-dom";

export const FindTalentText = styled.p`
  padding: 0 3.5rem 1rem 3.5rem;
  font-size: 1.6rem;
  text-align: center;
`;

export const FindTalentActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const GetStartedButton  = styled(DefaultButton).attrs(() => ({
  as: Link
}))`
  padding: 0.8rem 2.4rem 0.8rem 2.4rem;
  text-align: center;
  text-decoration: none;
`;