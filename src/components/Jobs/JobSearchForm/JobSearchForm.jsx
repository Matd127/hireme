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

const JobSearchForm = () => {
  const dispatch = useDispatch();
  const dataFromHomepage = useLocation();
  const { state } = dataFromHomepage;

  const [title, setTitle] = useState(state?.title || "");
  const [location, setLocation] = useState(state?.location || "");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [minimumSalary, setMinimumSalary] = useState("");
  const [minimumExperience, setMinimumExperience] = useState("");

  const { jobsList } = useSelector((state) => state.jobs);

  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false);
  const { categoriesList } = useSelector((state) => state.categories);

  const filterJobs = (e) => {
    e.preventDefault();

    const filteredJobs = jobsList.filter((job) => {
      const titleMatch = job.title.toLowerCase().includes(title);
      const locationMatch = job.location.toLowerCase().includes(location);
      const categoryMatch =
        selectedCategory === "" || job.jobCategory === selectedCategory;
      const jobTypeMatch =
        selectedJobType === "" || job.jobType === selectedJobType;
      const salaryMatch = minimumSalary === "" || job.salary >= +minimumSalary;
      const experienceMatch =
        minimumExperience === "" || job.experience >= +minimumExperience;

      return (
        titleMatch &&
        locationMatch &&
        categoryMatch &&
        jobTypeMatch &&
        salaryMatch &&
        experienceMatch
      );
    });

    dispatch(jobsActions.setFilteredJobs(filteredJobs));
  };

  useEffect(() => {
    if (state) {
      const filteredJobs = jobsList.filter((job) => {
        const titleMatch = job.title.toLowerCase().includes(state.title);
        const locationMatch = job.location.toLowerCase().includes(state.location);

        return titleMatch && locationMatch;
      });

      dispatch(jobsActions.setFilteredJobs(filteredJobs));
    }
  }, [dispatch, jobsList, state]);



  return (
    <SectionWrapper>
      <SearchFormWrapper onSubmit={filterJobs}>
        <JobSearchGrid showAdvancedMenu={showAdvancedMenu}>
          <PostingFormGroup>
            <PostingFormLabel>Job Title</PostingFormLabel>
            <FormInput
              type="text"
              placeholder="Enter job title, position or keyword"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel>Location</PostingFormLabel>
            <FormInput
              type="text"
              placeholder="Enter job location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </PostingFormGroup>

          <PostingFormGroup>
            <PostingFormLabel>Categories</PostingFormLabel>
            <FormSelect
              defaultValue=""
              id="jobCategory"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value={selectedCategory} disabled>
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
                  onChange={(e) => setSelectedJobType(e.target.value)}
                >
                  <option value={selectedJobType} disabled>
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
                  value={minimumSalary}
                  onChange={(e) => setMinimumSalary(e.target.value)}
                />
              </PostingFormGroup>

              <PostingFormGroup>
                <PostingFormLabel>Minimum Experience</PostingFormLabel>
                <FormInput
                  type="number"
                  value={minimumExperience}
                  placeholder="Enter years of exp"
                  onChange={(e) => setMinimumExperience(e.target.value)}
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
