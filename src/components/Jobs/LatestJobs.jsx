import {
  LatestContainer,
  LatestJobContainer,
  LatestJobsItem,
  LatestJobsItemContent,
  LatestJobsItemBtns,
  LatestJobsItemKeywords,
  LatestJobsItems,
  LatestTitle,
} from "./LatestJobs";
import { Hr } from "../UI/Hr";

const LastestJobs = () => {
  return (
    <LatestContainer>
      <LatestJobContainer>
        <LatestTitle>Latest Jobs Listing</LatestTitle>
        <Hr />
        <LatestJobsItems>
          <LatestJobsItem>
            <LatestJobsItemContent>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <div>Junior UX/UI Designer</div>
                  <div>Comapny: XYZ</div>
                  <div>Salary: $5000 - 8000</div>
                </div>
                <div>Location: AA </div>
              <LatestJobsItemBtns>
                <button>Apply</button>
                <button>Add to favourite</button>
              </LatestJobsItemBtns>
            </LatestJobsItemContent>
            <LatestJobsItemKeywords>
              
              <span>Keywords: </span>
              <span>First </span>
              <span>Second </span>
              <span>Third </span>
            </LatestJobsItemKeywords>
          </LatestJobsItem>
        </LatestJobsItems>
      </LatestJobContainer>
    </LatestContainer>
  );
};

export default LastestJobs;
