import styled from "styled-components";
import { FormWrapper } from "../../UI/styles/FormStyle";
import { InputStyle } from "../../UI/styles/InputStyle";
import { Label } from "../../UI/styles/LabelStyle";
import { DefaultButton } from "../../UI/styles/ButtonStyle";
import { media } from "../../UI/mediaQueries";

export const ContactFormWrapper = styled.form`
  ${FormWrapper}
  display: grid;
  margin: 0 12.5%;
  padding: 0 2rem;
`;

export const ContactFormLabel = styled.label`
  ${Label}
`;

export const ContactFormInput = styled.input`
  ${InputStyle}
`;

export const ContactFormTitle = styled.h2`
  font-size: 2.4rem;
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
  grid-template-columns: repeat(1, 1fr);
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

export const ContactFormMessage = styled.textarea`
  ${InputStyle}
`;
