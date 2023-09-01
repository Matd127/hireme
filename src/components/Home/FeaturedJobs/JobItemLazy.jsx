
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
import { Link } from "react-router-dom";
import placeholderImg from "../../../assets/placeholder.png";

const JobItemLazy = React.memo(({jobs}) => {
 
  return jobs?.map((job) => (
      <JobItem key={job.id}>
        <JobInfo>
          <JobItemWrapper>
            <Logo>
              <img src={job.logo ? job.logo : placeholderImg} alt="job" />
            </Logo>
            <JobDetails>
              <JobTitle>{job.title}</JobTitle>
              <CompantyDetail>
                {job.companyName} · {job.location}
              </CompantyDetail>
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
          <ApplyButton>
            <Link to={`/job/${job.id}/${job.title}`}>Apply</Link>
          </ApplyButton>
        </JobActions>
      </JobItem>
    ))
});

export default JobItemLazy;
