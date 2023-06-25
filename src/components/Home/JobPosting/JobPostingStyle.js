import styled from "styled-components";
import { DefaultButton } from "../../UI/ButtonStyle";
import { InnerWrapper } from "../../UI/WrapperStyle";

export const JobPostingInnerWrapper = styled(InnerWrapper)`
  text-align: center;
`

export const JobPostingTitle = styled.h2`
  color: #2f2f2f;
  font-size: 40px;
`;

export const JobPostingText = styled.p`
  color: #333333;
  padding: 0 2rem 0 2rem;

`;

export const JobPostingAction = styled(DefaultButton)`
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
`;
