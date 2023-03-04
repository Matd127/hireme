import {
  LatestJobsItem,
  LatestJobsItemContent,
  LatestJobsBtns,
  Keywords,
  LatestJobsJob,
} from "./LatestJobs.style";
import classes from "./LatestJob.module.css";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";

const LatestJob = () => {
  return (
    <LatestJobsItem>
      <LatestJobsItemContent>
        <LatestJobsJob>
          <div className={classes["job-name"]}>Junior UX/UI Designer</div>
          <div className={classes["job-company"]}>Comapny: XYZ</div>
          <div className={classes["job-salary"]}>Salary: $5000 - 8000</div>
        </LatestJobsJob>
        <div className={classes["job-location"]}>
          <VscLocation style={{ fontSize: "40px" }} />
          Location: AA
        </div>
        <LatestJobsBtns>
          <button>Apply</button>
          <button> <AiOutlineHeart/>Add to favourite</button>
        </LatestJobsBtns>
      </LatestJobsItemContent>
      <Keywords>
        <span>Keywords: </span>
        <span>First </span>
        <span>Second </span>
        <span>Third </span>
      </Keywords>
    </LatestJobsItem>
  );
};

export default LatestJob;
