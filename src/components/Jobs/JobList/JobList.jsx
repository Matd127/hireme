import SectionWrapper from "../../Common/SectionWrapper/SectionWrapper";
import { SectionTitle } from "../../Common/SectionWrapper/SectionWrapperStyle";
import JobItemLazy from "../../Home/FeaturedJobs/JobItemLazy";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import JobsPagination from "../JobPagination/JobPagination";
import usePagination from "../../../hooks/usePagination";
import { ErrorMessage } from "../../Home/FeaturedJobs/FeaturedJobsStyle";

const JobList = () => {
  const { jobsList, filteredJobs, error } = useSelector((state) => state.jobs);
  const [jobsToDisplay, setJobsToDisplay] = useState([]);

  useEffect(() => {
    setJobsToDisplay(filteredJobs.length > 0 ? filteredJobs : jobsList);
  }, [filteredJobs, jobsList]);

  const { nextPage, prevPage, setPage, pageNumbers, records, currentPage } =
    usePagination(1, jobsToDisplay);

  return (
    <SectionWrapper theme="dark">
      <SectionTitle theme="dark">
        The following job offers have been found:
      </SectionTitle>
      {<JobItemLazy jobs={records}></JobItemLazy>}
      {error && (
        <ErrorMessage>Jobs were not loaded due to an error.</ErrorMessage>
      )}
      {!error && (
        <JobsPagination
          jobs={jobsToDisplay}
          prevPage={prevPage}
          pageNumbers={pageNumbers}
          setPage={setPage}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      )}
    </SectionWrapper>
  );
};

export default JobList;
