import styled from "styled-components";
import { media } from "../../UI/mediaQueries";
import { DefaultButton } from "../../UI/ButtonStyle";
import { InputStyle } from "../../UI/InputStyle";

export const PostingFormWrapper = styled.div`
  margin-top: 2rem;
  border: 1px solid #dee2e6;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  color: #333;
`;

export const PostingFormTitle = styled.h2`
  color: rgb(47, 47, 47);
  font-size: 24px;
`;

export const PostingFormInnerWrapper = styled.form`
  padding: 1rem;
`;

export const PostingFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${media.medium`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const PostingFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: left;
`;

export const PostingFormLabel = styled.label`
  font-size: 20px;
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
`;