import {
  JobsContainer,
  JobsInnerContainer,
  SearchForm,
  SearchFormItems,
} from "./Jobs.style";

import { Hr } from "../UI/Hr";
import { SubmitButton } from "../ContactForm/ContactBaseStyles";
import { useDispatch, useSelector } from "react-redux";
import JobList from "../UI/JobList";
import JobsPagination from "./JobsPagination";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { jobsActions } from "../../redux/jobs-slice";
import React from "react";
import { useLocation } from "react-router-dom";
import usePagination from "../../hooks/usePagination";

const Jobs = () => {
  const dispatch = useDispatch();
  const [urlParams] = useSearchParams();
  const locationHook = useLocation();

  const categories = useSelector((state) => state.jobs.jobsCategories);
  const jobs = useSelector((state) => state.jobs.foundJobs);

  const searchParams = locationHook.state || Object.fromEntries([...urlParams]);
  const [position, setPosition] = useState(
    searchParams.position ? searchParams.position : ""
  );
  const [location, setLocation] = useState(
    searchParams.location ? searchParams.location : ""
  );
  const [category, setCategory] = useState(
    searchParams.category ? searchParams.category : ""
  );

  const submitHandler = () => {
    dispatch(jobsActions.findJob({ position, location, category }));
  };

  const { nextPage, prevPage, setPage, pageNumbers, records } = usePagination(
    1,
    jobs
  );

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
            <select
              defaultValue={category || "DEFAULT"}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="DEFAULT" disabled={true} hidden={true}>
                Select category
              </option>
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>

            <SubmitButton style={{ width: "100%" }} onClick={submitHandler}>
              Search
            </SubmitButton>
          </SearchFormItems>
        </SearchForm>
        <JobList jobs={records}></JobList>
        <JobsPagination
          jobs={jobs}
          prevPage={prevPage}
          pageNumbers={pageNumbers}
          setPage={setPage}
          nextPage={nextPage}
        />
      </JobsInnerContainer>
    </JobsContainer>
  );
};

export default Jobs;
