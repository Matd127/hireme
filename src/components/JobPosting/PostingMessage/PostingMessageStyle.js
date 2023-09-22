import styled from "styled-components";

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30rem;
`;

export const MessageIcon = styled.div`
  color: ${props => props.isSuccess ? "green" : "gold"};
  margin: 2.2rem 0;
`;

export const MessageTitle = styled.h2`
  font-size: 4rem;
`;

export const MessageText = styled.p`
  margin-top: 1rem;
  font-size: 2.1rem;
  text-align: center;
`;
