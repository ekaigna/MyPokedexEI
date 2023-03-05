import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import "./PaginationComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PaginationComponent = (props) => {
  const { totalPages, setPage } = props;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected);
    console.log(`User requested page number ${event.selected}`);
  };

  return (
    <div
      id="pagination"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
      }}
    >
      <ReactPaginate
        activeClassName={"item active "}
        breakClassName={"item break-me "}
        breakLabel="..."
        containerClassName={"pagination"}
        disabledClassName={"disabled-page"}
        nextClassName={"item next "}
        nextLabel={
          <FontAwesomeIcon
            className="font-upload"
            icon={faCircleChevronRight}
          />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        pageClassName={"item pagination-page "}
        previousClassName={"item previous"}
        previousLabel={
          <FontAwesomeIcon className="font-upload" icon={faCircleChevronLeft} />
        }
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default PaginationComponent;
