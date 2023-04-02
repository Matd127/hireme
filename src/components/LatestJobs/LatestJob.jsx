import {
  LatestJobsItem,
  LatestJobsItemContent,
  LatestJobsBtns,
  Keywords,
  LatestJobsJob,
} from "./LatestJobs.style";
import { VscLocation } from "react-icons/vsc";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { ApplyBtn, FavBtn } from "../UI/Buttons";
import { useSelector } from "react-redux";

const LatestJob = () => {
  const showBestJobs = useSelector((state) => state.jobs.latestJobs);

  return (
    <>
      {showBestJobs.map((latestJob) => (
        <LatestJobsItem key={latestJob.id}>
          <LatestJobsItemContent>
            <LatestJobsJob>
              <div className="job-name">{latestJob.position}</div>
              <div className="job-company">
                Comapny: {latestJob.company}
              </div>
              <div className="job-salary">
                Salary: {latestJob.salary}
              </div>
            </LatestJobsJob>

            <div className="job-location">
              <VscLocation style={{ fontSize: "40px" }} />
              Location: {latestJob.location}
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
            {latestJob.keywords.map((keyword) => (
              <span key={keyword}>{keyword}, </span>
            ))}
          </Keywords>
        </LatestJobsItem>
      ))}
    </>
  );
};

export default LatestJob;
