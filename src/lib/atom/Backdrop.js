import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Backdrop = ({ className, children }) => {
  return (
    <div
      className={classnames("harsh-ui-modal_backdrop", {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Backdrop;
