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
import { useSelector } from "react-redux";

const LatestJob = () => {
  const showBestJobs = useSelector((state) => state.jobs.items);

  return (
    <>
      {showBestJobs.map((bestJob) => (
        <LatestJobsItem key={bestJob.id}>
          <LatestJobsItemContent>
            <LatestJobsJob>
              <div className={classes["job-name"]}>{bestJob.position}</div>
              <div className={classes["job-company"]}>
                Comapny: {bestJob.company}
              </div>
              <div className={classes["job-salary"]}>
                Salary: {bestJob.salary}
              </div>
            </LatestJobsJob>

            <div className={classes["job-location"]}>
              <VscLocation style={{ fontSize: "40px" }} />
              Location: {bestJob.location}
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
            Keywords:{" "}
            {bestJob.keywords.map((keyword) => (
              <span key={keyword}>{keyword}, </span>
            ))}
          </Keywords>
        </LatestJobsItem>
      ))}
    </>
  );
};

export default LatestJob;
