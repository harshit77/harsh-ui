import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Footer = ({ className, children }) => {
  return (
    <div
      className={classnames("harsh-ui-modal__footer", {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Footer;
