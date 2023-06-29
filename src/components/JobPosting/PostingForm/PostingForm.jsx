import { useForm } from "react-hook-form";
import { Wrapper } from "../../UI/WrapperStyle";
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
  DescriptionArea,
} from "./PostingFormStyle";
import { BsXLg } from "react-icons/bs";
import useTags from "../../../hooks/useTags";

const PostingForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const skillsTags = useTags();
  const benefitsTags = useTags();
  const keywordsTags = useTags();

  return (
    <Wrapper>
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
              <PostingFormLabel>Company Website</PostingFormLabel>
              <FormInput
                type="text"
                placeholder="Company website"
                {...register("companyWebsite")}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Company E-mail*</PostingFormLabel>
              <FormInput
                type="text"
                placeholder="Company email"
                {...register("companyEmail")}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Job Category*</PostingFormLabel>
              <FormSelect
                type="text"
                {...register("jobCategory")}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
              </FormSelect>
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Job Type*</PostingFormLabel>
              <FormSelect type="text" {...register("jobType")} defaultValue="">
                <option value="" disabled>
                  Select a type
                </option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
                <option value="Contract">Contract</option>
              </FormSelect>
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Location*</PostingFormLabel>
              <FormInput
                type="text"
                placeholder="Job location"
                {...register("location")}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Salary ($)*</PostingFormLabel>
              <FormInput
                type="number"
                placeholder="Salary"
                {...register("salary")}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Experience (Years)</PostingFormLabel>
              <FormInput
                type="number"
                placeholder="Experience"
                {...register("experience")}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Required Skills</PostingFormLabel>
              {skillsTags.tags.map((tag) => (
                <span key={tag.id}>
                  {tag.value}
                  <BsXLg
                    size={15}
                    onClick={() => skillsTags.handleDeleteTag(tag.id)}
                  />
                </span>
              ))}
              <FormInput
                type="text"
                placeholder="Required Skills"
                onBlur={skillsTags.handleTags}
                onKeyDown={skillsTags.handleTagsEnter}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Benefits</PostingFormLabel>
              {benefitsTags.tags.map((tag) => (
                <span key={tag.id}>
                  {tag.value}
                  <BsXLg
                    size={15}
                    onClick={() => benefitsTags.handleDeleteTag(tag.id)}
                  />
                </span>
              ))}
              <FormInput
                type="text"
                placeholder="Benefits"
                onBlur={benefitsTags.handleTags}
                onKeyDown={benefitsTags.handleTagsEnter}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Keywords</PostingFormLabel>
              {keywordsTags.tags.map((tag) => (
                <span key={tag.id}>
                  {tag.value}
                  <BsXLg
                    size={15}
                    onClick={() => keywordsTags.handleDeleteTag(tag.id)}
                  />
                </span>
              ))}
              <FormInput
                type="text"
                placeholder="Keywords"
                onBlur={keywordsTags.handleTags}
                onKeyDown={keywordsTags.handleTagsEnter}
              />
            </PostingFormGroup>

            <PostingFormGroup>
              <PostingFormLabel>Logo</PostingFormLabel>
              <FormInput type="file" placeholder="Logo" {...register("logo")} />
            </PostingFormGroup>
          </PostingFormGrid>

          <PostingFormGroup>
            <PostingFormLabel>Description</PostingFormLabel>
            <DescriptionArea
              rows={6}
              type="text"
              placeholder="Description"
              {...register("description")}
            />
          </PostingFormGroup>

          <FormAction>
            <SubmitButton>Submit</SubmitButton>
          </FormAction>
        </PostingFormInnerWrapper>
      </PostingFormWrapper>
    </Wrapper>
  );
};

export default PostingForm;