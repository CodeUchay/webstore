import React, { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="pagination flex justify-center items-center mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-link mr-2"
        >
          &laquo; Prev
        </button>
        <span className="pagination-info mr-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-link ml-2"
        >
          Next &raquo;
        </button>
      </div>
    );
  };
  
  export default Pagination;