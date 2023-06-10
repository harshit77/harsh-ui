import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Divider = ({ className, ...otherProps }) => {
  return (
    <li
      className={classnames("harsh-ui-dropdown__popup-menu-divider", {
        [className]: className,
      })}
      {...otherProps}
    />
  );
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;
