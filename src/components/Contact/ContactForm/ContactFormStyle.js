import styled from "styled-components";
import { FormWrapper } from "../../../utils/styles/FormStyle"
import { InputStyle } from "../../../utils/styles/InputStyle"
import { Label } from "../../../utils/styles/LabelStyle";
import { DefaultButton } from "../../../utils/styles/ButtonStyle";
import { media } from "../../../utils/mediaQueries";

export const ContactFormWrapper = styled.form`
  ${FormWrapper}
  margin: 0 12.5%;
  padding: 0 2rem;

  ${media.large`
    margin: 0;
  `}
`;

export const ContactFormLabel = styled.label`
  ${Label}
  font-weight: 500;
`;

export const ContactFormInput = styled.input`
  ${InputStyle}
`;

export const ContactFormTitle = styled.h2`
  font-size: 3rem;
  margin: 2.5rem 0;
`;

export const ContactFromGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
`;

export const ContactFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${media.large`
  grid-template-columns: repeat(1, 100%);
  `}
`;

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0px;
  margin-bottom: 2.5rem;
`;

export const SubmitButton = styled(DefaultButton)`
  padding: 1rem 2.5rem;
`;

export const ContactFormArea = styled.textarea`
  ${InputStyle}
  font-family: inherit;
`;

export const ContactFormError = styled.span`
  margin-top: 0.5rem;
  color: rgb(191, 61, 52);
`;

export const ContactFormInfo = styled.p`
  font-size: 1.6rem;
  text-align: left;
  padding-left: 1rem;
`;
