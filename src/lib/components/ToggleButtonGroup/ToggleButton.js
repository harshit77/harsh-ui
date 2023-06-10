import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const ToggleButton = ({ className, children, active, ...otherProps }) => {
  return (
    <div
      className={classnames("harsh-ui-toggleButtonGroup__buttons--button", {
        [className]: className,
        "harsh-ui-toggleButtonGroup__buttons--button--active": active,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
};

ToggleButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
};
ToggleButton.displayName = "ToggleButton";

export default ToggleButton;
