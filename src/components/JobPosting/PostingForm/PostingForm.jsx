import { useForm } from "react-hook-form";
import {
  PostingFormGroup,
  PostingFormLabel,
  PostingFormTitle,
  PostingFormWrapper,
  FormInput,
  FormAction,
  SubmitButton,
  FormSelect,
  PostingFormGrid,
  DescriptionArea,
  FormError,
} from "./PostingFormStyle";
import { BsXLg } from "react-icons/bs";
import useTags from "../../../hooks/useTags";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "../../../redux/categories-slice";

const PostingForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchCategories() {
      dispatch(getCategories());
    }
    fetchCategories();
  }, [dispatch]);

  const skillsTags = useTags();
  const benefitsTags = useTags();
  const keywordsTags = useTags();

  // const { categoriesList, error, loading } = useSelector(
  const { categoriesList } = useSelector((state) => state.categories);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({
      ...data,
      skills: skillsTags.tags,
      benefits: benefitsTags.tags,
      keywords: keywordsTags.tags,
    });
  };

  const isValidUrl = (url) =>
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/.test(
      url
    );

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  return (
    <SectionWrapper>
      <PostingFormWrapper
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Title */}
        <PostingFormTitle>Provide Job Details</PostingFormTitle>
        <PostingFormGrid>
          <PostingFormGroup>
            <PostingFormLabel htmlFor="title">Title*</PostingFormLabel>
            <FormInput
              id="title"
              type="text"
              aria-invalid={errors.title ? "true" : "false"}
              placeholder="Job title or keyword"
              {...register("title", {
                required: true,
                minLength: 3,
                maxLength: 75,
              })}
            />
            {errors.title && errors.title.type === "required" && (
              <FormError role="alert">Title is required</FormError>
            )}
          </PostingFormGroup>

          {/* Company Name */}
          <PostingFormGroup>
            <PostingFormLabel htmlFor="companyName">
              Company Name*
            </PostingFormLabel>
            <FormInput
              id="companyName"
              type="text"
              aria-invalid={errors.companyName ? "true" : "false"}
              placeholder="Company name"
              {...register("companyName", {
                required: true,
                minLength: 3,
                maxLength: 75,
              })}
            />
            {errors.companyName && errors.companyName.type === "required" && (
              <FormError role="alert">Company name is required</FormError>
            )}
          </PostingFormGroup>

          {/* Company Website */}
          <PostingFormGroup>
            <PostingFormLabel htmlFor="companyWebsite">
              Company Website
            </PostingFormLabel>
            <FormInput
              id="companyWebsite"
              type="text"
              placeholder="Company website"
              aria-invalid={errors.companyWebsite ? "true" : "false"}
              {...register("companyWebsite", {
                validate: (value) => {
                  if (value) {
                    return isValidUrl(value);
                  }
                  return true;
                },
              })}
            />
            {errors.companyWebsite && (
              <FormError role="alert">Company website is incorrect</FormError>
            )}
          </PostingFormGroup>

          {/* Company E-mail */}
          <PostingFormGroup>
            <PostingFormLabel htmlFor="companyEmail">
              Company E-mail*
            </PostingFormLabel>
            <FormInput
              id="companyEmail"
              aria-invalid={errors.companyEmail ? "true" : "false"}
              type="text"
              placeholder="Company e-mail"
              {...register("companyEmail", {
                required: true,
                maxLength: 35,
                validate: (value) => {
                  if (value) {
                    return isValidEmail(value);
                  }
                  return true;
                },
              })}
            />
            {errors.companyEmail && (
              <FormError role="alert">Company e-mail is incorrect</FormError>
            )}
          </PostingFormGroup>

          {/* Company Category */}
          <PostingFormGroup>
            <PostingFormLabel htmlFor="jobCategory">
              Job Category*
            </PostingFormLabel>
            <FormSelect
              type="text"
              aria-invalid={errors.companyEmail ? "true" : "false"}
              id="jobCategory"
              {...register("jobCategory", {
                required: true,
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Select a category
              </option>
              {categoriesList.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </FormSelect>
            {errors.jobCategory && (
              <FormError role="alert">Select category</FormError>
            )}
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="jobType">Job Type*</PostingFormLabel>
            <FormSelect
              type="text"
              aria-invalid={errors.jobType ? "true" : "false"}
              {...register("jobType", {
                required: true,
              })}
              defaultValue=""
              id="jobType"
            >
              <option value="" disabled>
                Select a type
              </option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </FormSelect>

            {errors.jobCategory && (
              <FormError role="alert">Select job type </FormError>
            )}
          </PostingFormGroup>

          {/* Job Location */}
          <PostingFormGroup>
            <PostingFormLabel htmlFor="location">Location*</PostingFormLabel>
            <FormInput
              type="text"
              aria-invalid={errors.location ? "true" : "false"}
              id="location"
              placeholder="Job location"
              {...register("location", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
            />
            {errors.location && (
              <FormError role="alert">Location is required</FormError>
            )}
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="salary">Salary ($)*</PostingFormLabel>
            <FormInput
              type="number"
              id="salary"
              aria-invalid={errors.salary ? "true" : "false"}
              placeholder="Salary"
              {...register("salary", {
                required: true,
                validate: {
                  positive: (sal) => parseInt(sal) > 0,
                },
              })}
            />
            {errors.salary && (
              <FormError role="alert">Incorrect salary</FormError>
            )}
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="experience">
              Experience (Years)
            </PostingFormLabel>
            <FormInput
              id="experience"
              aria-invalid={errors.experience ? "true" : "false"}
              type="number"
              placeholder="Experience"
              {...register("experience", {
                validate: {
                  validate: (value) => {
                    if (value) {
                      return parseInt(value) >= 0;
                    }
                    return true;
                  },
                },
              })}
            />
            {errors.experience && (
              <FormError role="alert">Incorrect experience years</FormError>
            )}
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="skills">
              Required Skills
            </PostingFormLabel>
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
              id="skills"
              type="text"
              placeholder="Required Skills"
              onBlur={skillsTags.handleTags}
              onKeyDown={skillsTags.handleTagsEnter}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="benefits">Benefits</PostingFormLabel>
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
              id="benefits"
              type="text"
              placeholder="Benefits"
              onBlur={benefitsTags.handleTags}
              onKeyDown={benefitsTags.handleTagsEnter}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="keywords">Keywords</PostingFormLabel>
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
              id="keywords"
              placeholder="Keywords"
              onBlur={keywordsTags.handleTags}
              onKeyDown={keywordsTags.handleTagsEnter}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="applyLink">Apply Link</PostingFormLabel>
            <FormInput
              type="text"
              id="applyLink"
              placeholder="Apply link"
              {...register("applyLink")}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel htmlFor="logo">Logo</PostingFormLabel>
            <FormInput
              type="file"
              placeholder="Logo"
              {...register("logo")}
              id="logo"
            />
          </PostingFormGroup>
        </PostingFormGrid>

        <PostingFormGroup>
          <PostingFormLabel htmlFor="description">Description*</PostingFormLabel>
          <DescriptionArea
            id="description"
            rows={6}
            type="text"
            placeholder="Description"
            {...register("description")}
          />
        </PostingFormGroup>

        <FormAction>
          <SubmitButton>Submit</SubmitButton>
        </FormAction>
      </PostingFormWrapper>
    </SectionWrapper>
  );
};

export default PostingForm;
