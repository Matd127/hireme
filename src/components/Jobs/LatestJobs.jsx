import {
  LatestContainer,
  LatestJobContainer,
  LatestJobsItems,
  LatestTitle,
} from "./LatestJobs.style";
import { Hr } from "../UI/Hr";
import LatestJob from "./LatestJob";

const LastestJobs = () => {
  return (
    <LatestContainer>
      <LatestJobContainer>
        <LatestTitle>Latest Jobs Listing</LatestTitle>
        <Hr />
        <LatestJobsItems>
          <LatestJob/>
        </LatestJobsItems>
      </LatestJobContainer>
    </LatestContainer>
  );
};

export default LastestJobs;
