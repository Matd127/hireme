import {
  LatestJobsItem,
  LatestJobsItemContent,
  LatestJobsBtns,
  Keywords,
  LatestJobsJob,
} from "./LatestJobs.style";
import classes from "./LatestJob.module.css";
import { VscLocation } from "react-icons/vsc";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { ApplyBtn, FavBtn } from "../UI/Buttons";

const LatestJob = () => {
  return (
    <>
      <LatestJobsItem>
        <LatestJobsItemContent>
          <LatestJobsJob>
            <div className={classes["job-name"]}>Euwuwuw</div>
            <div className={classes["job-company"]}>Comapny: XYZ</div>
            <div className={classes["job-salary"]}>Salary: $5000 - 8000</div>
          </LatestJobsJob>

          <div className={classes["job-location"]}>
            <VscLocation style={{ fontSize: "40px" }} />
            Location: AA
          </div>
          <LatestJobsBtns>
            <ApplyBtn>
              <AiFillEdit />
              Apply
            </ApplyBtn>
            <FavBtn>
              <BsBookmarkHeart />
               Add to favourite
            </FavBtn>
          </LatestJobsBtns>
        </LatestJobsItemContent>
        <Keywords>
          <span>Keywords: </span>
          <span>First </span>
          <span>Second </span>
          <span>Third </span>
        </Keywords>
      </LatestJobsItem>

      <LatestJobsItem>
        <LatestJobsItemContent>
          <LatestJobsJob>
            <div className={classes["job-name"]}>Euwuwuw</div>
            <div className={classes["job-company"]}>Comapny: XYZ</div>
            <div className={classes["job-salary"]}>Salary: $5000 - 8000</div>
          </LatestJobsJob>

          <div className={classes["job-location"]}>
            <VscLocation style={{ fontSize: "40px" }} />
            Location: AA
          </div>
          <LatestJobsBtns>
            <ApplyBtn>
              <AiFillEdit />
              Apply
            </ApplyBtn>
            <FavBtn>
              <BsBookmarkHeart />
              Add to favourite
            </FavBtn>
          </LatestJobsBtns>
        </LatestJobsItemContent>
        <Keywords>
          <span>Keywords: </span>
          <span>First </span>
          <span>Second </span>
          <span>Third </span>
        </Keywords>
      </LatestJobsItem>
    </>
  );
};

export default LatestJob;
