import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import DetailLayout from "./DetailLayout";

const Detail = ({
  className,
  details,
  horizontal = false,
  grid = 2,
  titleClass,
  contentClass,
}) => {
  return (
    <div
      className={classnames(
        "harsh-ui-detail__wrapper",
        { "harsh-ui-detail__wrapper--horizontal": horizontal },
        {
          [className]: className,
        }
      )}
      style={{
        gridTemplateColumns: `repeat(${
          Object.values(details).length
        }, minmax(0, 1fr))`,
      }}
    >
      <DetailLayout details={details} grid={grid} titleClass={titleClass} />
    </div>
  );
};

Detail.propTypes = {};

export default Detail;
