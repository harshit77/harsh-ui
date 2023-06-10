import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {
  ArrowLeft,
  ArrowPaginationFirst,
  ArrowPaginationLast,
  ArrowRight,
} from "../../icons";
import Dropdown from "../Dropdown";

const Pagination = ({
  total,
  current,
  defaultPageSize,
  onPageChange = () => {},
  onPageCountChange = () => {},
}) => {
  const lastPageNumber =
    Math.floor(total / defaultPageSize) +
    (total % defaultPageSize === 0 ? 0 : 1);
  return (
    <div className="harsh-ui-pagination__wrapper xs:flex-wrap md:flex-nowrap">
      <div className="harsh-ui-pagination__title">
        Showing Result of{" "}
        <span>
          {current === 1 ? current : (current - 1) * defaultPageSize + 1}
        </span>{" "}
        –{" "}
        <span>
          {current * defaultPageSize <= total
            ? current * defaultPageSize
            : total}
        </span>{" "}
        of <span>{total}</span>
      </div>
      <div className="harsh-ui-pagination__item">
        <div>Items per Page</div>
        <Dropdown
          defaultValue={defaultPageSize}
          buttonProps={{
            variant: "secondary",
            disabled: total < 15,
          }}
          onCloseSelect={onPageCountChange}
        >
          <Dropdown.Menu>
            <Dropdown.MenuItem id={15}>15</Dropdown.MenuItem>
            <Dropdown.MenuItem id={30}>30</Dropdown.MenuItem>
            <Dropdown.MenuItem id={45}>45</Dropdown.MenuItem>
            <Dropdown.MenuItem id={60}>60</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
        <ArrowPaginationFirst
          className={classnames({
            "harsh-ui-pagination__item--disabled": current === 1,
          })}
          onClick={() => current !== 1 && onPageChange(1)}
        />
        <ArrowLeft
          className={classnames({
            "harsh-ui-pagination__item--disabled": current === 1,
          })}
          onClick={() => current !== 1 && onPageChange(current - 1)}
        />
        <ArrowRight
          className={classnames({
            "harsh-ui-pagination__item--disabled": current === lastPageNumber,
          })}
          onClick={() =>
            current + 1 <= lastPageNumber && onPageChange(current + 1)
          }
        />
        <ArrowPaginationLast
          className={classnames({
            "harsh-ui-pagination__item--disabled": current === lastPageNumber,
          })}
          onClick={() =>
            current !== lastPageNumber && onPageChange(lastPageNumber)
          }
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  current: PropTypes.number,
  defaultPageSize: PropTypes.number,
  onPageChange: PropTypes.func,
  onPageCountChange: PropTypes.func,
};

export default Pagination;
