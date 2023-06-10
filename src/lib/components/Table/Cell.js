import React, { useState } from "react";
import PropTypes from "prop-types";
import { ArrowDown, ArrowUp } from "../../icons";
import classnames from "classnames";

const Cell = ({
  currentRowActive = false,
  nested = false,
  columns,
  row,
  selectedRowkeys,
  handleActions,
  nestedElementClick,
}) => {
  const [reRender, setReRender] = useState(false);
  const handleColumnClick = (event, column) => {
    if (column.clickable) {
      event.stopPropagation();
      setReRender((prev) => !prev);
    }
  };
  return (
    <>
      {columns.map((column, index) => (
        <td
          key={index}
          className={classnames("harsh-ui-ellipsis", {
            "harsh-ui-ellipsis--noPadding":
              columns.length - 1 === index && nested,
          })}
          onClick={(e) => handleColumnClick(e, column)}
        >
          {"render" in column ? (
            !(columns.length - 1 === index && nested) ? (
              column.render(
                row[column.dataIndex] || row,
                selectedRowkeys.includes(row.id),
                handleActions,
                nestedElementClick
              )
            ) : (
              <span className="harsh-ui-last-column">
                {currentRowActive ? (
                  <ArrowUp
                    id="nested-table-accordion"
                    onClick={nestedElementClick}
                  />
                ) : (
                  <ArrowDown
                    id="nested-table-accordion"
                    onClick={nestedElementClick}
                  />
                )}
                {column.render(
                  row[column.dataIndex] || row,
                  selectedRowkeys.includes(row.id),
                  handleActions,
                  nestedElementClick
                )}
              </span>
            )
          ) : (
            row[column.dataIndex]
          )}
        </td>
      ))}
    </>
  );
};

Cell.propTypes = {
  currentRowActive: PropTypes.bool,
  nested: PropTypes.bool,
  lastColumn: PropTypes.bool,
  columns: PropTypes.array,
  row: PropTypes.object,
  selectedRowkeys: PropTypes.array,
  handleActions: PropTypes.func,
};

export default Cell;
