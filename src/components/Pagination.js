import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <div className="upload-icon">
        <button onClick={onLeftClick}>
          <FontAwesomeIcon className="font-upload" icon={faCircleChevronLeft} />
        </button>
      </div>
      <div className="pagination-text">
        {page} of {totalPages}
      </div>
      <div className="upload-icon">
        <button onClick={onRightClick}>
          <FontAwesomeIcon className="font-upload" icon={faCircleChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
