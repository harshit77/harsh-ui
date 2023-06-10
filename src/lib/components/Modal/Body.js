import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Body = ({ className, children }) => {
  return (
    <div
      className={classnames("harsh-ui-modal__body", {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Body;
