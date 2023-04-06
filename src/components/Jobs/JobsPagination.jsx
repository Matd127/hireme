import { useSelector } from "react-redux";
import { useState } from "react";
import { PaginationContainer } from "./Jobs.style";
import { useNavigate } from 'react-router-dom';

const JobsPagination = (props) => {
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.jobs.foundJobs);
  const pageNumbers = [...Array(props.noOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (props.currentPage !== props.noOfPages) props.setCurrentPage(+props.currentPage + 1);
  };
  const prevPage = () => {
    if (props.currentPage !== 1) props.setCurrentPage(+props.currentPage - 1);
  };

  console.log(typeof(currentPage))
  return (
    <PaginationContainer>
      <ul>
        <li>
          <a onClick={prevPage} href={`/jobs/${props.currentPage}${props.position ? `/${props.position}` : ''}${props.location ? `/${props.location}` : ''}`}>
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <a onClick={() => props.setCurrentPage(pgNumber)} href={`/jobs/${props.currentPage}`}>
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a onClick={nextPage} href={`/jobs/${props.currentPage}${props.position ? `/${props.position}` : ''}${props.location ? `/${props.location}` : ''}`}>
            Next
          </a>
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default JobsPagination;
