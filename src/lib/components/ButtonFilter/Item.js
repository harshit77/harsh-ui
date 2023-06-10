import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Item = ({ id, selected, className, children, onClick }) => {
  return (
    <div
      className={classnames(
        "harsh-ui-buttonFilter__wrapper--item",
        { "harsh-ui-buttonFilter__wrapper--selected": selected },
        { [className]: className }
      )}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Item.propTypes = {
  /** To specify the id of it*/
  id: PropTypes.number,
  /** To specify whether button is selected state or not*/
  selected: PropTypes.bool,
  /** To specify the selected buttons by defaults by passing ids to an array */
  className: PropTypes.string,
};

export default Item;
