import styled from "styled-components";
import { baseContainer, baseContent } from "./ContactBaseStyles";

export const MessageContainer = styled.div`
  ${baseContainer}
`;

export const MessageTitle = styled.h2`
  font-size: 35px;
`;
export const MessageContent = styled.p`
  font-size: 20px;
`;

export const Message = styled.div`
  ${baseContent}
`;

export const ActionsContainer = styled.div`
  margin-top: 15px;
`;
