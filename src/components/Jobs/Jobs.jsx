import {
  JobsContainer,
  JobsInnerContainer,
  SearchForm,
  SearchFormItems,
} from "./Jobs.style";

import { useParams } from "react-router-dom";
import { Hr } from "../UI/Hr";
import { SubmitButton } from "../ContactForm/ContactBaseStyles";
import { useDispatch, useSelector } from "react-redux";
import JobList from "../UI/JobList";
import JobsPagination from "./JobsPagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { jobsActions } from "../../redux/jobs-slice";

const Jobs = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const parameters = useSelector((state) => state.jobs.searchData);
  const jobs = useSelector((state) => state.jobs.foundJobs);

  // Data from form
  const [position, setPosition] = useState(
    parameters.position ? parameters.position : ""
  );
  const [location, setLocation] = useState(
    parameters.location ? parameters.location : ""
  );
  const [category, setCategory] = useState(
    parameters.category ? parameters.category : ""
  );

  // console.log(parameters);
  useEffect(() => {
    dispatch(jobsActions.findJob({ position, location, category }));
  }, [dispatch, category, position, location]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(
    params.page ? +params.page : 1
  );
  const [recordsPerPage] = useState(10);

  const indexOfLastJob = currentPage * recordsPerPage;
  const indexOfFirstJob = indexOfLastJob - recordsPerPage;

  const currentRecords = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const noOfPages = Math.ceil(jobs.length / 10);

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
              defaultValue={position}
              onChange={(e) => setPosition(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Where"
              defaultValue={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Category"
              defaultValue={category}
            ></input>
            <SubmitButton style={{ width: "100%" }}>Search</SubmitButton>
          </SearchFormItems>
        </SearchForm>
        <div style={{ textAlign: "left" }}>Advanced search options </div>
        <JobList jobs={currentRecords}></JobList>
        <JobsPagination
          noOfPages={noOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          position={position}
          location={location}
          category={category}
        />
      </JobsInnerContainer>
    </JobsContainer>
  );
};

export default Jobs;
