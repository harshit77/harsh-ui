import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Portal = ({
  id,
  children,
  className = "harsh-ui-portal",
  element = "div",
}) => {
  let container = id
    ? document.getElementById(id)
    : document.getElementsByClassName(className)[0];
  if (!container) {
    container = document.createElement(element);
    !!id
      ? container.setAttribute("id", id)
      : container.classList.add(className);
  }

  useEffect(() => {
    document.body.appendChild(container);
  }, []);
  return ReactDOM.createPortal(children, container);
};

Portal.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  element: PropTypes.string,
  className: PropTypes.string,
};

export default Portal;
