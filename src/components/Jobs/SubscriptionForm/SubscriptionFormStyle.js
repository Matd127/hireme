import styled from "styled-components";
import { DefaultButton } from "../../UI/styles/ButtonStyle";
import { InputStyle } from "../../UI/styles/InputStyle";
import { media } from "../../UI/mediaQueries";

export const SubscriptionFormWrapper = styled.div`
  display: flex;
  padding: 2rem;

  ${media.medium`
    flex-direction: column;
  `}
`;

export const SubscriptionInput = styled.input`
  flex-grow: 3;
  ${InputStyle}
`;

export const SubscriptionSubmit = styled(DefaultButton)`
  flex-grow: 1;
  padding: 1rem;
  margin-left: 1rem;

  ${media.medium`
    margin: 1rem 0;
  `}
`;
