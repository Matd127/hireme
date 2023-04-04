import { JobActions, JobContent, JobInformation, JobItem, JobKeywords } from'./JobList.style'
import { VscLocation } from "react-icons/vsc";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { ApplyBtn, FavBtn } from "../UI/Buttons";

const JobList = ({jobs}) => {
  return (
    <>
      {jobs.map((job) => (
        <JobItem key={job.id}>
          <JobContent>
            <JobInformation>
              <div className="job-name">{job.position}</div>
              <div className="job-company">Comapny: {job.company}</div>
              <div className="job-salary">Salary: {job.salary}</div>
            </JobInformation>

            <div className="job-location">
              <VscLocation style={{ fontSize: "40px" }} />
              Location: {job.location}
            </div>
            <JobActions>
              <ApplyBtn>
                <AiFillEdit />
                Apply
              </ApplyBtn>
              <FavBtn>
                <BsBookmarkHeart />
                Add to favourite
              </FavBtn>
            </JobActions>
          </JobContent>
          <JobKeywords>
            Keywords:{" "}
            {job.keywords.map((keyword) => (
              <span key={keyword}>{keyword}, </span>
            ))}
          </JobKeywords>
        </JobItem>
      ))}
    </>
  );
};

export default JobList;
