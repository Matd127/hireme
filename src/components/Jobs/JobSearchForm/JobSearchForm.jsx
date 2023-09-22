import { useEffect, useState } from "react";
import {
  FormInput,
  PostingFormGroup,
  PostingFormLabel,
  FormSelect,
} from "../../JobPosting/PostingForm/PostingFormStyle";
import {
  AdvancedMenu,
  AdvancedAction,
  JobSearchButton,
  JobSearchGrid,
  SearchFormWrapper,
} from "./JobSearchStyle";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { useSelector, useDispatch } from "react-redux";
import { jobsActions } from "../../../redux/jobs-slice";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

const JobSearchForm = () => {
  const dispatch = useDispatch();
  const dataFromPreviousPage = useLocation();
  const { state } = dataFromPreviousPage;
  const { jobsList } = useSelector((state) => state.jobs);
  const { categoriesList } = useSelector((state) => state.categories);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: state?.title || "",
      location: state?.location || "",
      category: state?.categoryName,
      minimumSalary: 0,
      minimumExperience: 0,
    },
  });

  const onLoadSubmit = (data) => {
    const filteredJobs = jobsList
      .filter((job) => job.title.toLowerCase().includes(data.title))
      .filter((job) => job.location.toLowerCase().includes(data.location));

    const filteredByCategory = data.category
      ? filteredJobs.filter((job) => job.jobCategory === data.category)
      : filteredJobs;

    dispatch(jobsActions.setFilteredJobs(filteredByCategory));
  };

  useEffect(() => {
    handleSubmit(onLoadSubmit)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSubmit]);


  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false);

  const filterJobs = (data) => {
    const filteredJobs = jobsList.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(data.title);
      const locationMatch = job.location.toLowerCase().includes(data.location);
      const categoryMatch =
        data.category === "" || job.jobCategory === data.category;
      const jobTypeMatch = data.jobType === "" || job.jobType === data.jobType;

      const salaryMatch = job.salary >= +data.minimumSalary;
      const experienceMatch = job.experience >= +data.minimumExperience;
      
      return (
        titleMatch &&
        locationMatch &&
        categoryMatch &&
        jobTypeMatch &&
        salaryMatch &&
        experienceMatch
      );
    });
    console.log(filteredJobs, jobsList);
    dispatch(jobsActions.setFilteredJobs(filteredJobs));
  };

  return (
    <SectionWrapper>
      <SearchFormWrapper onSubmit={handleSubmit(filterJobs)}>
        <JobSearchGrid showAdvancedMenu={showAdvancedMenu}>
          <PostingFormGroup>
            <PostingFormLabel>Job Title</PostingFormLabel>
            <FormInput
              type="text"
              placeholder="Enter job title, position or keyword"
              {...register("title")}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel>Location</PostingFormLabel>
            <FormInput
              type="text"
              placeholder="Enter job location"
              {...register("location")}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel>Categories</PostingFormLabel>
            <FormSelect
              defaultValue=""
              id="jobCategory"
              {...register("category")}
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
          </PostingFormGroup>

          {showAdvancedMenu && (
            <>
              <PostingFormGroup>
                <PostingFormLabel>Job Type</PostingFormLabel>
                <FormSelect
                  defaultValue=""
                  id="jobType"
                  {...register("jobType")}
                >
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
                <PostingFormLabel>Minimum Salary</PostingFormLabel>
                <FormInput
                  type="number"
                  placeholder="Enter salary"
                  {...register("minimumSalary")}
                />
              </PostingFormGroup>

              <PostingFormGroup>
                <PostingFormLabel>Minimum Experience</PostingFormLabel>
                <FormInput
                  type="number"
                  placeholder="Enter years of exp"
                  {...register("minimumExperience")}
                />
              </PostingFormGroup>
            </>
          )}
        </JobSearchGrid>

        <AdvancedMenu>
          {!showAdvancedMenu && (
            <AdvancedAction
              onClick={() => setShowAdvancedMenu(!showAdvancedMenu)}
            >
              Show Advanced Filters <BsChevronDown />
            </AdvancedAction>
          )}

          {showAdvancedMenu && (
            <AdvancedAction
              onClick={() => setShowAdvancedMenu(!showAdvancedMenu)}
            >
              Hide Advanced Filters <BsChevronUp />
            </AdvancedAction>
          )}

          <JobSearchButton>Search</JobSearchButton>
        </AdvancedMenu>
      </SearchFormWrapper>
    </SectionWrapper>
  );
};

export default JobSearchForm;
