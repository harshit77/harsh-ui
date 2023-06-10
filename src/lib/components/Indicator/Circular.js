import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Circular = ({ percentage, type, width, height }) => {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.width = `${width}px`;
      circleRef.current.style.height = `${height}px`;
      circleRef.current.style.background = `conic-gradient(
    rgb(var(--harsh-ui-alert-${type})) ${percentage * 3.6}deg,
    rgb(var(--harsh-ui-dark-70)) 0deg
  )`;
    }
  }, [circleRef, type, width, height, percentage]);

  return (
    <div className="harsh-ui-indicator__circle-progress" ref={circleRef}>
      <span className="harsh-ui-indicator__progressValue">{percentage}%</span>
    </div>
  );
};

Circular.propTypes = {
  percentage: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
};

export default Circular;
