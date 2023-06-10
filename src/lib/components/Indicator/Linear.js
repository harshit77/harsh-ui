import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Linear = ({ percentage, type, width, height }) => {
  const linearRef = useRef(null);

  useEffect(() => {
    if (linearRef.current) {
      linearRef.current.style.width = `${width}px`;
      linearRef.current.style.height = `${height}px`;
      linearRef.current.children[0].style.width = `${percentage}px`;
      linearRef.current.children[0].style.background = `
    rgb(var(--harsh-ui-alert-${type})) `;
    }
  }, [linearRef, type, width, height, percentage]);

  return (
    <div className="harsh-ui-indicator__linear--container" ref={linearRef}>
      <div className="harsh-ui-indicator__linear--progress" />
    </div>
  );
};

Linear.propTypes = {
  percentage: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
};

export default Linear;
