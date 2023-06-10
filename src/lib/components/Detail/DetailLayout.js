import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DetailLayout = ({ details, grid, titleClass, contentClass }) => {
  return (
    <>
      {Object.values(details).map((detail) => (
        <div className="gridContainer">
          <div className="harsh-ui-detail__section--title">
            {detail.sectionName}
          </div>
          <div
            className="harsh-ui-detail__section--container"
            style={{
              gridTemplateColumns: `repeat(${grid},minmax(0,1fr)`,
            }}
          >
            {detail.data.map((item, nameIndex) => (
              <div className="harsh-ui-detail__section--item" key={nameIndex}>
                <div
                  className={classnames(
                    "harsh-ui-detail__section--item--title",
                    { [titleClass]: titleClass }
                  )}
                >
                  {item.name}
                </div>
                <div
                  className={classnames(
                    "harsh-ui-detail__section--item--value",
                    { [contentClass]: contentClass }
                  )}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

DetailLayout.propTypes = {};

export default DetailLayout;
