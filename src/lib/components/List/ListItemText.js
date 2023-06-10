import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ListItemText = ({ text, className }) => {
  return (
    <div
      className={classnames("harsh-ui-list__listItem--text", {
        [className]: className,
      })}
    >
      {text}
    </div>
  );
};

ListItemText.propTypes = {};
ListItemText.displayName = "ListItemText";

export default ListItemText;
