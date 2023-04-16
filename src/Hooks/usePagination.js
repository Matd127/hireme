import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (initialPage, data) => {
  const recordsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [, setSearchParams] = useSearchParams({ page: currentPage });

  const indexOfLastElement = currentPage * recordsPerPage;
  const indexOfFirstElement = indexOfLastElement - recordsPerPage;

  const records = data.slice(indexOfFirstElement, indexOfLastElement);
  const noOfPages = Math.ceil(data.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage !== noOfPages && noOfPages > 0) {
      setCurrentPage(currentPage + 1);
      setSearchParams({ page: currentPage + 1 });
    }
  };

  const prevPage = () => {
    if (currentPage !== 1 && noOfPages > 0) {
      setCurrentPage(currentPage - 1);
      setSearchParams({ page: currentPage - 1 });
    }
  };

  const setPage = (page) => {
    if (page !== currentPage && page > 0 && page <= noOfPages) {
      setCurrentPage(page);
      setSearchParams({ page });
    }
  };

  const pageNumbers = [...Array(noOfPages + 1).keys()].slice(1);

  return {
    currentPage,
    nextPage,
    prevPage,
    setPage,
    pageNumbers,
    records
  };
};

export default usePagination;
