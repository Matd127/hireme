import {
  LatestJobsContainer,
  LatestJobsInnerContainer,
  LatestJobsTitle,
} from "./LatestJobs.style";
import { Hr } from "../UI/Hr";
import { useSelector } from "react-redux";
import JobList from "../UI/JobList";

const LastestJobs = () => {
  const showBestJobs = useSelector((state) => state.jobs.latestJobs);

  return (
    <LatestJobsContainer>
      <LatestJobsInnerContainer>
        <LatestJobsTitle>Latest Jobs Listing</LatestJobsTitle>
        <Hr />

        <JobList jobs = {showBestJobs}></JobList>
      </LatestJobsInnerContainer>
    </LatestJobsContainer>
  );
};

export default LastestJobs;
