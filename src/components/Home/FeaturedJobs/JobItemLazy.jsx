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

const JobItemLazy = () => {
  return (
    <JobItem>
      <JobInfo>
        <JobItemWrapper>
          <Logo />
          <JobDetails>
            <JobTitle>Test job</JobTitle>
            <CompantyDetail>Company · City, Country</CompantyDetail>
            <CompantyDetail>
              <JobType time="full">Full-Time</JobType> |{" "}
              <JobType>Category Name</JobType>{" "}
            </CompantyDetail>
          </JobDetails>
        </JobItemWrapper>
        <JobDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          repudiandae, cumque reiciendis iusto eligendi nobis id, perferendis,
          officia quae ipsam ad odio dolores commodi accusantium et mollitia
          corporis tenetur pariatur?
        </JobDescription>
      </JobInfo>
      <JobActions>
        <ApplyButton>Apply</ApplyButton>
      </JobActions>
    </JobItem>
  );
};

export default JobItemLazy;
