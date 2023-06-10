import React, { forwardRef, useState } from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import Nested from "./Nested";

const Row = forwardRef(
  (
    {
      type,
      rows,
      columns,
      onRowClick,
      onRowSelect,
      selectedRowkeys = [],
      handleActions,
      nestedElement,
      resizer,
    },
    ref
  ) => {
    const [toggleContent, setToggleContent] = useState(null);
    const handleRowClick = (e, row) => {
      if (onRowClick || onRowSelect) {
        e.stopPropagation();
        e.preventDefault();
        onRowClick && onRowClick(row);
        onRowSelect && onRowSelect(row);
      }
    };

    return (
      <>
        <colgroup>
          {columns.map((col, index) => (
            <col key={index} style={{ minWidth: col?.width || 50 }} />
          ))}
        </colgroup>
        <tbody>
          {rows.map((row, index) => (
            <tr
              className={row?.className}
              key={row?.id}
              onClick={(e) => handleRowClick(e, row)}
            >
              {type === "nested" ? (
                <Nested
                  columns={columns}
                  row={row}
                  index={index}
                  nestedElement={nestedElement}
                  selectedRowkeys={[toggleContent]}
                  handleActions={handleActions}
                  toggleContent={toggleContent}
                  setToggleContent={setToggleContent}
                  ref={ref}
                  resizer={resizer}
                />
              ) : (
                <Cell
                  columns={columns}
                  row={row}
                  selectedRowkeys={selectedRowkeys}
                  handleActions={handleActions}
                />
              )}
            </tr>
          ))}
        </tbody>
      </>
    );
  }
);

Row.propTypes = {
  type: PropTypes.string,
  rows: PropTypes.array,
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
  onRowSelect: PropTypes.func,
  selectedRowkeys: PropTypes.array,
  handleActions: PropTypes.func,
};

export default Row;
