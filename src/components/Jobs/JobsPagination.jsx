import { useSelector } from "react-redux";
import { PaginationContainer } from "./Jobs.style";
import { useSearchParams } from "react-router-dom";

const JobsPagination = (props) => {
  const [, setSearchParams] = useSearchParams({
    page: props.currentPage,
  });

  const pageNumbers = [...Array(props.noOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (props.currentPage !== props.noOfPages && props.noOfPages > 0) {
      props.setCurrentPage(props.currentPage + 1);
      setSearchParams({ page: props.currentPage + 1 });
    }
  };
  const prevPage = () => {
    if (props.currentPage !== 1 && props.noOfPages > 0) {
      props.setCurrentPage(props.currentPage - 1);
      setSearchParams({ page: props.currentPage - 1 });
    }
  };

  return (
    <PaginationContainer>
      <ul>
        <li>
          <span onClick={prevPage}>Previous</span>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber}>
            <span
              onClick={() => {
                props.setCurrentPage(pgNumber);
                setSearchParams({ page: pgNumber });
              }}
              href="#"
            >
              {pgNumber}
            </span>
          </li>
        ))}
        <li>
          <span onClick={nextPage}>Next</span>
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default JobsPagination;
