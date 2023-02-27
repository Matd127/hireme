import {
  LatestContainer,
  LatestJobContainer,
  LatestJobsItem,
  LatestJobsItems,
  LatestTitle,
} from "./RecentJobs";

const LastestJobs = () => {
  return (
    <LatestContainer>
      <LatestJobContainer>
        <LatestTitle>Latest Jobs Listing</LatestTitle>
        <LatestJobsItems>
          <LatestJobsItem>1</LatestJobsItem>
          <LatestJobsItem>2</LatestJobsItem>
          <LatestJobsItem>3</LatestJobsItem>
        </LatestJobsItems>
      </LatestJobContainer>
    </LatestContainer>
  );
};

export default LastestJobs;
