import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import Circular from "./Circular";
import classnames from "classnames";
import Linear from "./Linear";

const TYPE = {
  success: "success",
  info: "info",
  error: "error",
  warning: "warning",
};

const Indicator = ({
  label,
  percentage = 0,
  width = 50,
  height = 50,
  className,
  linear = false,
  type = TYPE.success,
  ...otherProps
}) => {
  return (
    <div
      className={classnames("harsh-ui-indicator__wrapper", {
        [className]: className,
      })}
      style={{ width: width }}
      {...otherProps}
    >
      <div className="harsh-ui-indicator__wrapper--label">
        <Typography component="body3" weight="medium" lineHeight="tight">
          {label}
        </Typography>
        {linear && (
          <div className="harsh-ui-indicator__progressValue">
            {percentage}%
          </div>
        )}
      </div>
      {linear ? (
        <Linear
          percentage={percentage}
          width={width}
          height={height}
          type={type}
        />
      ) : (
        <Circular
          percentage={percentage}
          width={width}
          height={height}
          type={type}
        />
      )}
    </div>
  );
};

Indicator.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  linear: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(TYPE)),
};

export default Indicator;
