import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";

const VARIANTS = {
  VERTICAL_ROUNDED_CIRCLE: "vertical-rounded-circle",
  VERTICAL_ROUNDED_CIRCLE_XS: "vertical-rounded-circle-xs",
  VERTICAL: "vertical",
  HORIZONTAL: "horizontal",
};

const Stats = ({
  variant = VARIANTS.HORIZONTAL,
  label,
  countProps = {},
  className,
  onClick = () => {},
  to,
  ...otherProps
}) => {
  const { value, className: countClassName } = countProps;
  let ParentComponent = "div",
    elementProps = {};
  if (to) {
    ParentComponent = Link;
    elementProps.to = to;
  } else {
    elementProps.onClick = onClick;
  }
  return (
    <ParentComponent
      className={classnames(
        "harsh-ui-stats__wrapper",
        {
          "harsh-ui-stats__wrapper--vertical": VARIANTS.VERTICAL === variant,
        },
        {
          "harsh-ui-stats__wrapper--vertical-rounded-circle":
            VARIANTS.VERTICAL_ROUNDED_CIRCLE === variant,
        },
        {
          "harsh-ui-stats__wrapper--vertical-rounded-circle-xs":
            VARIANTS.VERTICAL_ROUNDED_CIRCLE_XS === variant,
        },
        {
          [className]: className,
        }
      )}
      style={otherProps.style || {}}
      {...elementProps}
    >
      <div
        className={classnames("harsh-ui-stats__wrapper--label", {
          "harsh-ui-stats__wrapper--link":
            to && [VARIANTS.HORIZONTAL, VARIANTS.VERTICAL].includes(variant),
        })}
      >
        {label}
      </div>

      <div
        className={classnames(
          "harsh-ui-stats__wrapper--count",
          {
            [countClassName]: countClassName,
          },
          {
            "harsh-ui-stats__wrapper--link":
              to && VARIANTS.HORIZONTAL === variant,
          }
        )}
      >
        {value}
      </div>
    </ParentComponent>
  );
};

Stats.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  label: PropTypes.string,
  countProps: PropTypes.object,
  className: PropTypes.string,
  to: PropTypes.string,
};

export default Stats;
