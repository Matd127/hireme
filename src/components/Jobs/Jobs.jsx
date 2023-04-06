import {
  JobsContainer,
  JobsInnerContainer,
  SearchForm,
  SearchFormItems,
} from "./Jobs.style";

import { useParams } from "react-router-dom";
import { Hr } from "../UI/Hr";
import { SubmitButton } from "../ContactForm/ContactBaseStyles";
import { useSelector } from "react-redux";
import JobList from "../UI/JobList";
import JobsPagination from "./JobsPagination";
import { useState } from "react";

const Jobs = () => {
  const params = useParams();
  const jobs = useSelector((state) => state.jobs.foundJobs);

  const [currentPage, setCurrentPage] = useState(params.page ? +params.page : 1);
  const [recordsPerPage] = useState(10);

  const indexOfLastJob = currentPage * recordsPerPage;
  const indexOfFirstJob = indexOfLastJob - recordsPerPage;

  const currentRecords = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const noOfPages = Math.ceil(jobs.length / 10);

  const [position, setPosition] = useState(params.position ? params.position : null);
  const [location, setLocation] = useState(params.location ? params.location : null);
  const [category, setCategory] = useState(null);

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
              onChange={e => setPosition(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Where"
              defaultValue={params ? params.location : ""}
              onChange={e => setLocation(e.target.value)}
            ></input>
            <input type="text" placeholder="Category"></input>
            <SubmitButton style={{ width: "100%" }}>Search</SubmitButton>
          </SearchFormItems>
        </SearchForm>
        <div style={{ textAlign: "left" }}>Advanced search options </div>
        <JobList jobs={currentRecords}></JobList>
        <JobsPagination
          noOfPages={noOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          position = {position}
          location = {location}
          category = {category}
        />
      </JobsInnerContainer>
    </JobsContainer>
  );
};

export default Jobs;
