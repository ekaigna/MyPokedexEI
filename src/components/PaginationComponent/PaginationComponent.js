import React from "react";
import ReactPaginate from "react-paginate";
import "./PaginationComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//This component is used to apply pagination in the list of Pokémons.

const PaginationComponent = (props) => {
  const { totalPages, setPage } = props;

  // Invoke when user click to request another page and change the state of the page.
  const handlePageClick = (event) => {
    setPage(event.selected);
  };

  return (
    <div
      id="pagination"
      className="pagination-container"
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
