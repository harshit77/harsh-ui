import React, { useState } from "react";
import PropTypes from "prop-types";
import { ArrowDownward, ArrowUpward } from "../../icons";
import classnames from "classnames";

const Column = ({ columns, rows, onSort, handleColumnActions }) => {
  const [hover, setHover] = useState(null);

  const handleSorting = (sort, column, e) => {
    if (e.target.className === "resizer") {
      return false;
    }
    let setColumnAndDirection = {};
    if (sort.currentSorting === column.dataIndex) {
      if (sort.direction) {
        setColumnAndDirection = {
          column: column.dataIndex,
          direction: false,
        };
      } else
        setColumnAndDirection = {
          column: null,
          direction: null,
        };
    } else
      setColumnAndDirection = {
        column: column.dataIndex,
        direction: true,
      };
    sort.onSortChange(setColumnAndDirection);
    setHover(null);
  };

  return (
    <>
      <colgroup>
        {columns.map((col, index) => (
          <col key={index} style={{ minWidth: col?.width || 50 }} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              className={classnames("harsh-ui-ellipsis", {
                "harsh-ui-table__clickable": column.sorting,
              })}
              onClick={
                column.sorting && handleSorting.bind(this, onSort, column)
              }
              onMouseEnter={() => column.sorting && setHover(column.dataIndex)}
              onMouseLeave={() => column.sorting && setHover(null)}
            >
              <span className="">
                {"renderColumn" in column ? (
                  <span>
                    {column.renderColumn(
                      columns[column.title] || column.title,
                      rows,
                      handleColumnActions
                    )}
                    {[onSort.currentSorting, hover].includes(
                      column.dataIndex
                    ) && (
                      <span className="harsh-ui-table__sorting">
                        {onSort.currentSorting === column.dataIndex ? (
                          onSort.direction ? (
                            <ArrowUpward width={16} height={16} />
                          ) : (
                            <ArrowDownward width={16} height={16} />
                          )
                        ) : (
                          <ArrowUpward width={16} height={16} />
                        )}
                      </span>
                    )}
                  </span>
                ) : (
                  <span>
                    {column.title}
                    {[onSort.currentSorting, hover].includes(
                      column.dataIndex
                    ) && (
                      <span className="harsh-ui-table__sorting">
                        {onSort.currentSorting === column.dataIndex ? (
                          onSort.direction ? (
                            <ArrowUpward width={16} height={16} />
                          ) : (
                            <ArrowDownward width={16} height={16} />
                          )
                        ) : (
                          <ArrowUpward width={16} height={16} />
                        )}
                      </span>
                    )}
                  </span>
                )}
              </span>
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

Column.propTypes = {
  columns: PropTypes.array,
  onSort: PropTypes.shape({
    currentSorting: PropTypes.string,
    direction: PropTypes.bool,
    onSortChange: PropTypes.func,
  }),
};

export default Column;
