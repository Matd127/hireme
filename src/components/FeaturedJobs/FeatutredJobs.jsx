import { Wrapper } from "../UI/WrapperStyle";
import {
  FeaturedJobsTile,
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
  FeaturedJobsInnerWrapper,
  JobType
} from "./FeaturedJobsStyle";

const FeatruedJobs = () => {
  return (
    <Wrapper theme="dark">
      <FeaturedJobsInnerWrapper>
        <FeaturedJobsTile>Discover Featured Job Opportunites</FeaturedJobsTile>

        <JobItem>
          <JobInfo>
            <JobItemWrapper>
              <Logo />
              <JobDetails>
                <JobTitle>Frontaś Developer</JobTitle>
                <CompantyDetail >MegaFirma · Zadupie, Nibylandia</CompantyDetail>

                <CompantyDetail>
                  <JobType time = "full">
                    Full-Time
                  </JobType>{" "}
                  |{" "}
                  <JobType >
                    Category Name
                  </JobType>{" "}
                </CompantyDetail>

              </JobDetails>
            </JobItemWrapper>
            <JobDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur repudiandae, cumque reiciendis iusto eligendi nobis
              id, perferendis, officia quae ipsam ad odio dolores commodi
              accusantium et mollitia corporis tenetur pariatur?
            </JobDescription>
          </JobInfo>
          <JobActions>
            <ApplyButton>Apply</ApplyButton>
          </JobActions>
        </JobItem>

      </FeaturedJobsInnerWrapper>
    </Wrapper>
  );
};

export default FeatruedJobs;
