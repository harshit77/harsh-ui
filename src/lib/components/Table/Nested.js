import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";

const Nested = forwardRef(
  (
    {
      columns,
      index,
      row,
      handleActions,
      selectedRowkeys,
      toggleContent,
      setToggleContent,
      nestedElement,
      resizer,
    },
    ref
  ) => {
    const handleRowClick = (selectedRow, e) => {
      e.stopPropagation();
      setToggleContent((prevSelectedRowId) =>
        prevSelectedRowId === selectedRow.id ? null : selectedRow?.id
      );
    };

    return (
      <table
        className="harsh-ui-table__nested"
        ref={(el) =>
          el && resizer && !!nestedElement
            ? (ref.current[index] = el)
            : undefined
        }
      >
        <colgroup>
          {columns.map((col, index) => (
            <col key={index} style={{ minWidth: col?.width || 50 }} />
          ))}
        </colgroup>
        <tr>
          <Cell
            currentRowActive={toggleContent === row.id}
            nested
            columns={columns}
            row={row}
            handleActions={handleActions}
            selectedRowkeys={selectedRowkeys}
            nestedElementClick={handleRowClick.bind(this, row)}
          />
        </tr>
        {toggleContent === row.id && (
          <tr>{nestedElement(row, handleRowClick)}</tr>
        )}
      </table>
    );
  }
);

Nested.propTypes = {
  columns: PropTypes.array,
  row: PropTypes.object,
  index: PropTypes.number,
  selectedRowkeys: PropTypes.array,
  handleActions: PropTypes.func,
};

export default Nested;
