import React from "react";
import PropTypes from "prop-types";

import classnames from "classnames";

const SPINNER_THEMES = {
  dark: "dark",
  light: "light",
};

const Spinner = ({ theme = "dark", className = "" }) => {
  const spinnerItemClassName = classnames(
    "harsh-ui-spinner__item",
    {
      "theme-dark": theme === "dark",
    },
    {
      "theme-light": theme === "light",
    }
  );
  return (
    <span className={classnames("harsh-ui-spinner", [className])}>
      <i className={spinnerItemClassName}></i>
      <i className={spinnerItemClassName}></i>
      <i className={spinnerItemClassName}></i>
      <i className={spinnerItemClassName}></i>
    </span>
  );
};

Spinner.propTypes = {
  theme: PropTypes.oneOf(Object.values(SPINNER_THEMES)),
  className: PropTypes.string,
};

export default Spinner;
