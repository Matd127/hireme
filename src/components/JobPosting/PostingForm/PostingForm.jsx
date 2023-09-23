import { useForm } from "react-hook-form";
import {
  PostingFormGroup,
  PostingFormLabel,
  PostingFormTitle,
  PostingFormWrapper,
  FormInput,
  FormAction,
  SubmitButton,
  PostingFormGrid,
  PostingFormInfo,
  RequiredField
} from "./PostingFormStyle";
import useTags from "../../../hooks/useTags";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCategories } from "../../../redux/categories-slice";
import {
  descriptionValidation,
  emailValidation,
  namesValidation,
  numbersValidation,
  optionsValidation,
  urlValidation,
} from "./validations";
import PostingInput from "./PostingInput";
import PostingSelect from "./PostingSelect";
import PostingTag from "./PostingTag";
import PostingArea from "./PostingArea";
import { upload } from "./upload";
import PostingMessage from "../PostingMessage/PostingMessage";

const PostingForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategories() {
      dispatch(getCategories());
    }
    fetchCategories();
  }, [dispatch]);

  const [file, setFile] = useState();
  const [isSent, setIsSent] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const skillsTags = useTags();
  const benefitsTags = useTags();
  const keywordsTags = useTags();
  const { categoriesList } = useSelector((state) => state.categories);
  const { jobsList } = useSelector((state) => state.jobs);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFileChange = (e) => {
    const inputFile = e.target.files[0];
    if (inputFile.fize > 1024 * 1024) return;
    setFile(e.target.files[0]);
    e.preventDefault();
  };

  const onSubmit = (data) => {
    upload(
      file,
      dispatch,
      data,
      jobsList.length,
      skillsTags.tags,
      benefitsTags.tags,
      keywordsTags.tags,
      setIsSuccess
    );
    setIsSent(true);
  };
  return (
    <SectionWrapper>
      {!isSent && (
        <PostingFormWrapper
          onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
          onSubmit={handleSubmit(onSubmit)}
        >
          <PostingFormTitle>Provide Job Details</PostingFormTitle>
          <PostingFormGrid>
            <PostingInput
              id="title"
              type="text"
              labelTitle="Job Title"
              errors={errors.title}
              placeholder="Job title or keyword"
              isRequired={namesValidation.required}
              {...register("title", namesValidation)}
            ></PostingInput>

            <PostingInput
              id="location"
              type="text"
              labelTitle="Location"
              errors={errors.location}
              placeholder="Job location"
              isRequired={namesValidation.required}
              {...register("location", namesValidation)}
            ></PostingInput>

            <PostingInput
              id="companyName"
              type="text"
              labelTitle="Company Name"
              errors={errors.companyName}
              placeholder="Company name"
              isRequired={namesValidation.required}
              {...register("companyName", namesValidation)}
            ></PostingInput>

            <PostingInput
              labelTitle="Company Website"
              id="companyWebsite"
              type="text"
              errors={errors.companyWebsite}
              placeholder="Company website"
              isRequired={urlValidation.required}
              {...register("companyWebsite", urlValidation)}
            ></PostingInput>

            <PostingInput
              labelTitle="Company E-mail"
              id="companyEmail"
              type="text"
              errors={errors.companyEmail}
              placeholder="Company e-mail"
              isRequired={emailValidation.required}
              {...register("companyEmail", emailValidation)}
            ></PostingInput>

            <PostingSelect
              id="jobCategory"
              defaultValue=""
              labelTitle="Job Category"
              data={categoriesList}
              errors={errors.jobCategory}
              isRequired={optionsValidation.required}
              {...register("jobCategory", optionsValidation)}
            ></PostingSelect>

            <PostingSelect
              id="jobType"
              defaultValue=""
              labelTitle="Job Type"
              data={["Full-time", "Part-time", "Internship", "Contract"]}
              errors={errors.jobType}
              isRequired={optionsValidation.required}
              {...register("jobType", optionsValidation)}
            ></PostingSelect>

            <PostingInput
              id="salary"
              type="number"
              labelTitle="Salary ($)"
              errors={errors.salary}
              placeholder="Salary"
              isRequired={numbersValidation.required}
              {...register("salary", numbersValidation)}
            ></PostingInput>

            <PostingInput
              id="experience"
              type="number"
              labelTitle="Experience (Years)"
              errors={errors.experience}
              placeholder="Experience"
              isRequired={numbersValidation.required}
              {...register("experience", numbersValidation)}
            ></PostingInput>

            <PostingTag
              id="skills"
              tags={skillsTags.tags}
              errors={skillsTags.errors}
              placeholder="Required Skills"
              onChange={skillsTags.handleTags}
              onClick={skillsTags.handleDeleteTag}
              onKeyDown={skillsTags.handleTagsEnter}
            ></PostingTag>

            <PostingTag
              id="benefits"
              tags={benefitsTags.tags}
              placeholder="Benefits"
              onChange={benefitsTags.handleTags}
              onClick={benefitsTags.handleDeleteTag}
              onKeyDown={benefitsTags.handleTagsEnter}
            ></PostingTag>

            <PostingTag
              id="keywords"
              tags={keywordsTags.tags}
              placeholder="Keywords"
              onChange={keywordsTags.handleTags}
              onClick={keywordsTags.handleDeleteTag}
              onKeyDown={keywordsTags.handleTagsEnter}
            ></PostingTag>

            <PostingInput
              type="text"
              id="applyLink"
              placeholder="Apply link"
              labelTitle="Apply Link"
              errors={errors.applyLink}
              isRequired={urlValidation.required}
              {...register("applyLink", urlValidation)}
            />

            <PostingFormGroup>
              <PostingFormLabel htmlFor="logo">Logo</PostingFormLabel>
              <FormInput
                type="file"
                onChange={onFileChange}
                placeholder="Logo"
                id="logo"
              />
            </PostingFormGroup>
          </PostingFormGrid>

          <PostingArea
            id="description"
            rows={6}
            placeholder="Description"
            errors={errors.description}
            isRequired={descriptionValidation.required}
            {...register("description", descriptionValidation)}
          />

          <PostingFormInfo>
            <RequiredField>*</RequiredField> - Field is required.
          </PostingFormInfo>

          <FormAction>
            <SubmitButton>Submit</SubmitButton>
          </FormAction>
        </PostingFormWrapper>
      )}
      {isSent && <PostingMessage isSuccess={isSuccess} />}
    </SectionWrapper>
  );
};

export default PostingForm;
