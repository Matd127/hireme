import { PaginationContainer } from "./Jobs.style";

const JobsPagination = ({ prevPage, pageNumbers, setPage, nextPage }) => {
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
                setPage(pgNumber);
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
