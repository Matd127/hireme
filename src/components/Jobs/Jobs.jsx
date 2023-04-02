import {
  JobsContainer,
  JobsInnerContainer,
  JobsList,
  SearchForm,
  SearchFormItems,
} from "./Jobs.style";
import {
  LatestJobsItem,
  LatestJobsItemContent,
  LatestJobsBtns,
  Keywords,
  LatestJobsJob,
} from "../LatestJobs/LatestJobs.style";

import { VscLocation } from "react-icons/vsc";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { ApplyBtn, FavBtn } from "../UI/Buttons";

import { useParams } from "react-router-dom";
import { Hr } from "../UI/Hr";
import { SubmitButton } from "../ContactForm/ContactBaseStyles";
import { useSelector } from "react-redux";

const Jobs = () => {
  const params = useParams();
  const jobs = useSelector((state) => state.jobs.foundJobs);

  console.log(jobs);
  return (
    <JobsContainer>
      <JobsInnerContainer>
        <SearchForm>
          <h2 style={{ textAlign: "left" }}>
            Job details <Hr />
          </h2>

          <SearchFormItems>
            <input
              type="text"
              placeholder="Position"
              defaultValue={params ? params.position : ""}
            ></input>
            <input type="text" placeholder="Where"></input>
            <input type="text" placeholder="Category"></input>
            <SubmitButton style={{width: '100%'}}>Search</SubmitButton>
          </SearchFormItems>
        </SearchForm>
        <div style={{textAlign: 'left'}}>Advanced search options </div>
        <JobsList>

        {jobs.map((job) => (
        <LatestJobsItem key={job.id}>
          <LatestJobsItemContent>
            <LatestJobsJob>
              <div className="job-name">{job.position}</div>
              <div className="job-company">
                Comapny: {job.company}
              </div>
              <div className="job-salary">
                Salary: {job.salary}
              </div>
            </LatestJobsJob>

            <div className="job-location">
              <VscLocation style={{ fontSize: "40px" }} />
              Location: {job.location}
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
            {job.keywords.map((keyword) => (
              <span key={keyword}>{keyword}, </span>
            ))}
          </Keywords>
        </LatestJobsItem>
      ))}

        </JobsList>
      </JobsInnerContainer>
    </JobsContainer>
  );
};

export default Jobs;
