import React from "react";
import { List } from "../icons";
import classnames from "classnames";
import PropTypes from "prop-types";

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
  dark: "dark",
};

const CustomIcon = ({
  icon = List,
  className,
  isSquare = false,
  onClick,
  variant = VARIANT.primary,
  size = 36,
  borderWidth = 2,
}) => {
  let Icon = icon;
  const innerSize = size - 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={classnames("harsh-ui-customIcon", {
        "harsh-ui-customIcon__square": isSquare,
        "harsh-ui-customIcon__secondary": variant == VARIANT.secondary,
        "harsh-ui-customIcon__dark": variant == VARIANT.dark,
        [className]: className,
      })}
      onClick={onClick}
    >
      {isSquare ? (
        <rect
          x={borderWidth / 2}
          y={borderWidth / 2}
          width={innerSize}
          height={innerSize}
          fill="none"
        />
      ) : (
        <circle
          cx={(innerSize - borderWidth) / 2}
          cy={(innerSize - borderWidth) / 2}
          r={(innerSize - borderWidth) / 2}
          strokeWidth={borderWidth}
        />
      )}
      <g
        transform={`translate(${
          innerSize / 4 + ((isSquare ? 1 : -1) * borderWidth) / 2
        },${innerSize / 4 + ((isSquare ? 1 : -1) * borderWidth) / 2})`}
      >
        {<Icon width={size / 2} height={size / 2} />}
      </g>
    </svg>
  );
};

CustomIcon.propTypes = {
  /** To specify the variants of Custom Icon */
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  /** To specify the class for an outermost container */
  className: PropTypes.string,
  /** To specify the icon we want. Just pass icon from harsh-ui/icons  */
  Icon: PropTypes.element,
  /** To specify whether CustomIcon is rounded or square */
  isSquare: PropTypes.bool,
  /** A callback function */
  onClick: PropTypes.func,
  /** To specify overall of size of an icon */
  size: PropTypes.number,
  /** To specify the borderWidth of an icon */
  borderWidth: PropTypes.number,
};

export default CustomIcon;
