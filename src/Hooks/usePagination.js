import { useState } from "react";

const usePagination = (initialPage, data, maxVisiblePages = 6) => {
  const recordsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const indexOfLastElement = currentPage * recordsPerPage;
  const indexOfFirstElement = indexOfLastElement - recordsPerPage;

  const records = data.slice(indexOfFirstElement, indexOfLastElement);
  const noOfPages = Math.ceil(data.length / recordsPerPage);

  const nextPage = () => {
    if (currentPage !== noOfPages && noOfPages > 0) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1 && noOfPages > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const setPage = (page) => {
    if (page !== currentPage && page > 0 && page <= noOfPages) {
      setCurrentPage(page);
    }
  };

  const visiblePageNumbers = (() => {
    if (noOfPages <= maxVisiblePages) {
      return [...Array(noOfPages).keys()].map((i) => i + 1);
    } else {
      const halfMax = Math.floor(maxVisiblePages / 2);
      let start = currentPage - halfMax;
      let end = currentPage + halfMax;

      if (start < 1) {
        start = 1;
        end = maxVisiblePages;
      } else if (end > noOfPages) {
        end = noOfPages;
        start = noOfPages - maxVisiblePages + 1;
      }
      return [...Array(end - start + 1).keys()].map((i) => start + i);
    }
  })();

  return {
    currentPage,
    nextPage,
    prevPage,
    setPage,
    pageNumbers: visiblePageNumbers,
    records,
  };
};

export default usePagination;
