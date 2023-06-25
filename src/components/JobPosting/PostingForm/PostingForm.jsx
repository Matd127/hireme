import { useForm } from "react-hook-form";
import { InnerWrapper, Wrapper } from "../../UI/WrapperStyle";
import {
  PostingFormGroup,
  PostingFormLabel,
  PostingFormInnerWrapper,
  PostingFormTitle,
  PostingFormWrapper,
  FormInput,
  FormAction,
  SubmitButton,
  FormSelect,
  PostingFormGrid,
} from "./PostingFormStyle";

const PostingForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Wrapper>
      <InnerWrapper>
        <PostingFormWrapper>
          <PostingFormTitle>Provide Job Details</PostingFormTitle>
          <PostingFormInnerWrapper onSubmit={handleSubmit(onSubmit)}>
            <PostingFormGrid>
              <PostingFormGroup>
                <PostingFormLabel>Title*</PostingFormLabel>
                <FormInput
                  type="text"
                  placeholder="Job title or keyword"
                  {...register("title")}
                />
              </PostingFormGroup>

              <PostingFormGroup>
                <PostingFormLabel>Company Name*</PostingFormLabel>
                <FormInput
                  type="text"
                  placeholder="Company name"
                  {...register("companyName")}
                />
              </PostingFormGroup>

              <PostingFormGroup>
                <PostingFormLabel>Job Category*</PostingFormLabel>
                <FormSelect type="text" {...register("jobCategory")} defaultValue="">
                  <option value="" disabled>Select a category</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </FormSelect>
              </PostingFormGroup>
            </PostingFormGrid>

            <FormAction>
              <SubmitButton>Submit</SubmitButton>
            </FormAction>
          </PostingFormInnerWrapper>
        </PostingFormWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default PostingForm;
