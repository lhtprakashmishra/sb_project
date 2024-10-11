import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination-container">
      <button className="pagination-prev" onClick={handlePrevious}>
        Previous
      </button>
      {renderPageNumbers()}
      <button className="pagination-next" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
