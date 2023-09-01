import {
  NavigationArrow,
  NavigationList,
  PaginationWrapper,
  NavigationItem,
  NavigationNumber,
} from "./JobPaginationStyle";

const JobsPagination = ({ prevPage, pageNumbers, setPage, nextPage, currentPage }) => {

  return (
    <PaginationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationArrow onClick={prevPage}>&#60;</NavigationArrow>
        </NavigationItem>
        {pageNumbers.map((pgNumber) => (
          <NavigationItem key={pgNumber}>
            <NavigationNumber
              onClick={() => {
                setPage(pgNumber);
              }}
              isActive={pgNumber === currentPage}
            >
              {pgNumber}
            </NavigationNumber>
          </NavigationItem>
        ))}
        <NavigationItem>
          <NavigationArrow onClick={nextPage}>&#62;</NavigationArrow>
        </NavigationItem>
      </NavigationList>
    </PaginationWrapper>
  );
};

export default JobsPagination;
