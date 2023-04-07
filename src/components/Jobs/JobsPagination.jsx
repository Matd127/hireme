import { useSelector } from "react-redux";
import { PaginationContainer } from "./Jobs.style";
import { useSearchParams } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const JobsPagination = (props) => {
  const data = useSelector((state) => state.jobs.searchData);

  const [searchParams, setSearchParams] = useSearchParams({
    ...data,
    page: props.currentPage,
  });

  const pageNumbers = [...Array(props.noOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (props.currentPage !== props.noOfPages)
      props.setCurrentPage(props.currentPage + 1);
      
    setSearchParams({
      ...data,
      page: props.currentPage,
    });
  };
  const prevPage = () => {
    if (props.currentPage !== 1) props.setCurrentPage(props.currentPage - 1);
    setSearchParams({ ...data, page: props.currentPage });
  };

  return (
    <PaginationContainer>
      <ul>
        <li>
          <a onClick={prevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <a
              onClick={() => {
                props.setCurrentPage(pgNumber);
                setSearchParams({ ...searchParams, page: pgNumber });
              }}
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default JobsPagination;
