import { useSelector } from "react-redux";
import React from "react";
import {
  JobActions,
  JobDescription,
  JobDetails,
  JobInfo,
  JobItem,
  JobItemWrapper,
  JobTitle,
  Logo,
  ApplyButton,
  CompantyDetail,
  JobType,
} from "./FeaturedJobsStyle";

const JobItemLazy = React.memo(() => {
  const jobs = useSelector(state => state.jobs.jobsList)
  
  return (
   jobs.map(job => (
    <JobItem key={job.id}>
    <JobInfo>
      <JobItemWrapper>
        <Logo />
        <JobDetails>
          <JobTitle>{job.title}</JobTitle>
          <CompantyDetail>{job.companyName} · {job.location}</CompantyDetail>
          <CompantyDetail>
            <JobType time="full">{job.jobType}</JobType> |{" "}
            <JobType>{job.jobCategory}</JobType>{" "}
          </CompantyDetail>
        </JobDetails>
      </JobItemWrapper>
      <JobDescription>
        {job.description.substring(0, 255)}...
      </JobDescription>
    </JobInfo>
    <JobActions>
      <ApplyButton>Apply</ApplyButton>
    </JobActions>
  </JobItem>
   ))
  );
});

export default JobItemLazy;
