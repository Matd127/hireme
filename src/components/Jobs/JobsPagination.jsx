import { useSelector } from "react-redux";
import { useState } from "react";

const JobsPagination = () => {
  const jobs = useSelector((state) => state.jobs.foundJobs);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const indexOfLastJob = currentPage * recordsPerPage;
  const indexOfFirstJob = indexOfLastJob - recordsPerPage;

  const currentRecords = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const noOfPages = Math.ceil(jobs.length / 10);

  return <div>{noOfPages}</div>;
};

export default JobsPagination;
