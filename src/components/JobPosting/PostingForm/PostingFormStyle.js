import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { DefaultButton } from "../../UI/ButtonStyle";
import { InputStyle } from "../../UI/InputStyle";
import { FormGrid, FormWrapper } from "../../UI/FormStyle";

export const PostingFormWrapper = styled.form`
  ${FormWrapper}
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
`;

export const PostingFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
`;

export const PostingFormLabel = styled.label`
  font-size: 2rem;
  font-weight: 600;
  color: rgb(52, 52, 52);
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  ${InputStyle};
`;

export const FormSelect = styled.select`
  ${InputStyle};
`;

export const FormAction = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const SubmitButton = styled(DefaultButton)`
  padding: 10px 25px;
`;

export const DescriptionArea = styled.textarea`
  ${InputStyle};
  resize: vertical;
  font-family: inherit;
  font-size: 1.6rem;
`;
