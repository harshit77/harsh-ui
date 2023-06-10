import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Header = ({ className, children }) => {
  return (
    <div
      className={classnames("harsh-ui-pane__header", {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Header;
