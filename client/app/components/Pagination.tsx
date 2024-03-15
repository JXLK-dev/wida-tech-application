import React from "react";
import { DataComponent } from "./function/DataJson";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  refreshPage,
  handlePageChange,
  setIndexOfFirstCard,
  setIndexOfLastCard,
  fetchPaginationData,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const rangeStart = Math.max(1, currentPage - 2);
    const rangeEnd = Math.min(totalPages, currentPage + 2);

    for (let i = rangeStart; i <= rangeEnd; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => {
            setIndexOfFirstCard((i - 1) * 10);
            setIndexOfLastCard(i * 10);
            refreshPage(false);
            handlePageChange(i);
            fetchPaginationData((i - 1) * 10);
            refreshPage(true);
          }}
          className={`px-4 py-2 rounded ${
            currentPage === i
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-500"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="bottom-0 mr-20 fixed flex items-center justify-center space-x-4 z-20 bg-cyan-800 rounded-md p-2 mb-3">
      <button
        onClick={() => {
          setIndexOfFirstCard((currentPage - 1) * 10);
          setIndexOfLastCard(currentPage * 10);
          fetchPaginationData((currentPage - 1) * 10);
          refreshPage(false);
          handlePageChange(currentPage - 1);
          refreshPage(true);
        }}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500"
      >
        Previous
      </button>
      {renderPageNumbers()} {/* Add rendered page numbers */}
      <button
        onClick={() => {
          setIndexOfFirstCard((currentPage - 1) * 10);
          setIndexOfLastCard(currentPage * 10);
          fetchPaginationData((currentPage - 1) * 10);
          refreshPage(false);
          handlePageChange(currentPage + 1);
          refreshPage(true);
        }}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-gray-500"
      >
        Next
      </button>
    </div>
  );
};
