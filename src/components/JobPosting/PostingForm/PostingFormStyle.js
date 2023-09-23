import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { DefaultButton } from "../../UI/styles/ButtonStyle";
import { InputStyle } from "../../UI/styles/InputStyle";
import { FormGrid, FormWrapper } from "../../UI/styles/FormStyle";

export const PostingFormWrapper = styled.form`
  ${FormWrapper}
  padding: 3rem 0;
  margin: 0;
`;

export const PostingFormGrid = styled.div`
  ${FormGrid}

  ${media.xlarge`
  grid-template-columns: repeat(2, 50%);
  `}

  ${media.medium`
  grid-template-columns: repeat(1, 100%);
  `}
`;

export const PostingFormTitle = styled.h2`
  color: rgb(47, 47, 47);
  font-size: 2.4rem;
  margin-bottom: 2rem;
`;

export const PostingFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
`;

export const PostingFormLabel = styled.label`
  font-size: 2rem;
  font-weight: 500;
  color: rgb(52, 52, 52);
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  ${InputStyle};
`;

export const FormSelect = styled.select`
  ${InputStyle};
  appearance: none;
  -webkit-appearance: none;
`;

export const FormError = styled.span`
  margin-top: 0.5rem;
  color: rgb(191, 61, 52);
`;

export const FormAction = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const SubmitButton = styled(DefaultButton)`
  padding: 10px 25px;
`;

export const PostingFormDescription = styled.div`
  margin: 0 1rem 1rem 1rem;
  padding: 0 1rem;
`;

export const DescriptionArea = styled.textarea`
  ${InputStyle};
  resize: vertical;
  font-family: inherit;
  font-size: 1.6rem;
`;

export const RequiredField = styled.span`
  color: rgb(191, 61, 52);
`;

export const PostingFormInfo = styled.p`
  font-size: 1.8rem;
  text-align: left;
  margin-left: 1rem;
  padding-left: 2rem;
`;
