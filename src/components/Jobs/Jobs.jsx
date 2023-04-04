import {
  JobsContainer,
  JobsInnerContainer,
  SearchForm,
  SearchFormItems,
} from "./Jobs.style";

import { useParams } from "react-router-dom";
import { Hr } from "../UI/Hr";
import { SubmitButton } from "../ContactForm/ContactBaseStyles";
import { useSelector } from "react-redux";
import JobList from "../UI/JobList";
import JobsPagination from "./JobsPagination";

const Jobs = () => {
  const params = useParams();
  const jobs = useSelector((state) => state.jobs.foundJobs);

  console.log(jobs);
  return (
    <JobsContainer>
      <JobsInnerContainer>
        <SearchForm>
          <h2 style={{ textAlign: "left" }}>
            Job details <Hr />
          </h2>

          <SearchFormItems>
            <input
              type="text"
              placeholder="Position"
              defaultValue={params ? params.position : ""}
            ></input>
            <input type="text" placeholder="Where" defaultValue={params ? params.location : ""}></input>
            <input type="text" placeholder="Category"></input>
            <SubmitButton style={{width: '100%'}}>Search</SubmitButton>
          </SearchFormItems>
        </SearchForm>
        <div style={{textAlign: 'left'}}>Advanced search options </div>
        <JobList jobs = {jobs}></JobList>
        <JobsPagination/>
      </JobsInnerContainer>
    </JobsContainer>
  );
};

export default Jobs;
