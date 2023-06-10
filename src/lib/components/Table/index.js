import React, { useEffect, useMemo, useRef, useState } from "react";
import Column from "./Column";
import Row from "./Row";
import Pagination from "./Pagination";
import classnames from "classnames";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import useResizer from "../../hooks/useResizer";

const TYPE = {
  primary: "primary",
  secondary: "secondary",
  bordered: "bordered",
  nested: "nested",
};

const Table = ({
  type = TYPE.primary,
  onRowClick,
  columnData = [],
  rowData = [],
  onRowSelect,
  selectedRowkeys = [],
  loading,
  onResizeEnd = () => {},
  pagination = {
    total: 1,
    currentPageNumber: 1,
    defaultPageSize: 15,
    customElement: undefined,
    onPageChange: () => {},
    onPageCountChange: () => {},
  },
  onSort = {
    currentSorting: null,
    direction: true,
    onSortChange: () => {},
  },
  fixedHeight,
  handleActions = () => {},
  handleColumnActions = () => {},
  nestedElement,
  resizer = true,
  className,
}) => {
  const tableRefHead = useRef(null);
  const tableRefBody = useRef(!nestedElement ? null : []);
  const [dataReloaded, setDataLoaded] = useState(rowData.length > 0);
  useResizer(tableRefHead, tableRefBody, onResizeEnd, resizer, dataReloaded);

  let fixedHeightStyle = useMemo(() => {
    if (fixedHeight === undefined) {
      return {};
    }
    if (typeof fixedHeight === "boolean") {
      return {
        overflow: "auto",
        maxHeight: 280,
        display: "inline-block",
      };
    } else {
      return {
        overflow: "auto",
        maxHeight: fixedHeight,
        display: "inline-block",
      };
    }
  }, [fixedHeight]);
  useEffect(() => {
    setDataLoaded(rowData);
  }, [rowData]);

  return (
    <div className="harsh-ui-table__outerContainer">
      {loading && (
        <div className="harsh-ui-table__spinner">
          <Spinner />
        </div>
      )}
      <div
        className={classnames("harsh-ui-table__container", {
          "harsh-ui-table__container--loading": loading,
          "no-border": type === TYPE.nested,
          [className]: className,
        })}
      >
        <div className="harsh-ui-table__wrapper">
          <table
            className={classnames("harsh-ui-table harsh-ui-table--thead", {
              "harsh-ui-table__secondary": type === TYPE.secondary,
              "harsh-ui-table__bordered": type === TYPE.bordered,
              "harsh-ui-table__nested--thead": type === TYPE.nested,
            })}
            ref={resizer ? tableRefHead : undefined}
          >
            <Column
              columns={columnData}
              rows={rowData}
              onSort={onSort}
              handleColumnActions={handleColumnActions}
            />
          </table>
          <div
            style={{
              ...(fixedHeight && {
                maxHeight:
                  typeof fixedHeight === "boolean" ? "400px" : fixedHeight,
              }),
            }}
          >
            <table
              className={classnames("harsh-ui-table", {
                "harsh-ui-table__secondary": type === TYPE.secondary,
                "harsh-ui-table__bordered": type === TYPE.bordered,
                "harsh-ui-table__nested": type === TYPE.nested,
              })}
              ref={resizer && !nestedElement ? tableRefBody : undefined}
              style={{ ...fixedHeightStyle }}
            >
              <Row
                type={type}
                rows={rowData}
                columns={columnData}
                fixedHeight={fixedHeight}
                onRowClick={onRowClick}
                onRowSelect={onRowSelect}
                selectedRowkeys={selectedRowkeys}
                handleActions={handleActions}
                nestedElement={nestedElement}
                ref={tableRefBody}
                resizer={resizer}
              />
            </table>
          </div>
        </div>
        {pagination?.customElement ? (
          pagination.customElement()
        ) : (
          <Pagination
            total={pagination.totalCount ?? 0}
            current={pagination?.currentPageNumber}
            defaultPageSize={pagination?.defaultPageSize}
            onPageChange={pagination?.onPageChange}
            onPageCountChange={pagination?.onPageCountChange}
          />
        )}
      </div>
    </div>
  );
};

Table.propTypes = {
  /** To specify the variants of Table */
  type: PropTypes.oneOf(Object.values(TYPE)),
  /** To specify whether rows are clickable or not */
  onRowClick: PropTypes.func,
  /** To specify list of columns you want to see*/
  columnData: PropTypes.array,
  /** To specify list of rows data assocaited woth column*/
  rowData: PropTypes.array,
  /** To specify whether can selected on click of checkbox*/
  onRowSelect: PropTypes.func,
  /** To specify already selected checkbox list*/
  selectedRowkeys: PropTypes.array,
  /** To show loading state of table*/
  loading: PropTypes.bool,
  /** To specify pagination related stuff*/
  pagination: PropTypes.shape({
    total: PropTypes.number,
    currentPageNumber: PropTypes.number,
    defaultPageSize: PropTypes.number,
    onPageChange: PropTypes.func,
    onPageCountChange: PropTypes.func,
  }),
  /** A callback to handle column resize*/
  onResizeEnd: PropTypes.func,
  /** An object to specify currentSelectedColumn,its direction and a callback on click of column*/
  onSort: PropTypes.shape({
    currentSorting: PropTypes.string,
    direction: PropTypes.bool,
    onSortChange: PropTypes.func,
  }),
  handleActions: PropTypes.func,
  resizer: PropTypes.bool,
  className: PropTypes.string,
};

export default Table;
