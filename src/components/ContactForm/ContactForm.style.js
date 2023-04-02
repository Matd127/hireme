import styled from "styled-components";
import { baseContainer } from "./ContactBaseStyles";
import { baseContent, baseInputStyles } from "./ContactBaseStyles";

export const FormContainer = styled.div`
  ${baseContainer}
`;

export const Form = styled.form`
  ${baseContent}
`;

export const FormTitle = styled.h1`
  font-size: 35px;
`;
export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 10px;
`;

export const FormLabel = styled.label``;

export const FormField = styled.input`
  ${baseInputStyles}
`;

export const FormMessage = styled.textarea`
  ${baseInputStyles}
  resize: none;
`;