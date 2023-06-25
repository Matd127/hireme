import { Wrapper } from "../../UI/WrapperStyle";
import { JobPostingAction, JobPostingInnerWrapper, JobPostingText, JobPostingTitle } from "./JobPostingStyle";

const JobPosting = () => {
  return (
    <Wrapper theme="light">
      <JobPostingInnerWrapper>
        <JobPostingTitle>Post Your Job and Find Top Talent!</JobPostingTitle>
        <JobPostingText>
          Ready to hire the best candidates for your team? Our job posting
          platform makes it easy for employers to reach a wide pool of talented
          individuals. Simply create a compelling job listing that highlights
          the responsibilities, requirements, and benefits of the position, and
          connect with qualified applicants who align with your company's goals.
          Join us today and find your next superstar employee!
        </JobPostingText>
        <JobPostingAction>Get started</JobPostingAction>
      </JobPostingInnerWrapper>
    </Wrapper>
  );
};

export default JobPosting;
