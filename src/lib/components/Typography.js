import React, { forwardRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const FONT_FAMILY = {
  regular: "regular",
  medium: "medium",
  semibold: "semibold",
};

const LINE_HEIGHTS = {
  none: "none",
  tight: "tight",
  snug: "snug",
  normal: "normal",
  relaxed: "relaxed",
  loose: "loose",
};

const TEXT_TRANSFORM = {
  none: "none",
  capitalize: "capitalize",
  uppercase: "uppercase",
  lowercase: "lowercase",
};

const COMPONENTS = {
  "h1-1": "h1-1",
  "h1-2": "h1-2",
  "h1-3": "h1-3",
  "h1-4": "h1-4",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  "h3-1": "h3-1",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "body1",
  body2: "body2",
  body3: "body3",
};

const Typography = forwardRef(
  (
    {
      family = FONT_FAMILY.regular,
      lineHeight,
      component,
      children,
      textTransform,
      className = "",
      ...otherProps
    },
    ref
  ) => {
    const Component = [
      "body1",
      "body2",
      "body3",
      "h1-1",
      "h1-2",
      "h1-3",
      "h1-4",
      "h3-1",
    ].includes(component)
      ? "p"
      : COMPONENTS[component]
      ? component
      : "p";
    return (
      <Component
        ref={ref}
        className={classnames({
          "harsh-ui-text-h1-1": component === COMPONENTS["h1-1"],
          "harsh-ui-text-h1-2": component === COMPONENTS["h1-2"],
          "harsh-ui-text-h1-3": component === COMPONENTS["h1-3"],
          "harsh-ui-text-h1-4": component === COMPONENTS["h1-4"],
          "harsh-ui-text-h3-1": component === COMPONENTS["h3-1"],
          "harsh-ui-text-h1": component === COMPONENTS.h1,
          "harsh-ui-text-h2": component === COMPONENTS.h2,
          "harsh-ui-text-h3": component === COMPONENTS.h3,
          "harsh-ui-text-h4": component === COMPONENTS.h4,
          "harsh-ui-text-h5": component === COMPONENTS.h5,
          "harsh-ui-text-h6": component === COMPONENTS.h6,
          "harsh-ui-text-body1": component === COMPONENTS.body1,
          "harsh-ui-text-body2": component === COMPONENTS.body2,
          "harsh-ui-text-body3": component === COMPONENTS.body3,
          "harsh-ui-text-transform-none":
            textTransform === TEXT_TRANSFORM.none,
          "harsh-ui-text-transform-capitalize":
            textTransform === TEXT_TRANSFORM.capitalize,
          "harsh-ui-text-transform-uppercase":
            textTransform === TEXT_TRANSFORM.uppercase,
          "harsh-ui-text-transform-lowercase":
            textTransform === TEXT_TRANSFORM.lowercase,
          "harsh-ui-font-medium": family === FONT_FAMILY.medium,
          "harsh-ui-font-semibold": family === FONT_FAMILY.semibold,
          "harsh-ui-leading-none": lineHeight === LINE_HEIGHTS.none,
          "harsh-ui-leading-tight": lineHeight === LINE_HEIGHTS.tight,
          "harsh-ui-leading-snug": lineHeight === LINE_HEIGHTS.snug,
          "harsh-ui-leading-normal": lineHeight === LINE_HEIGHTS.normal,
          "harsh-ui-leading-relaxed": lineHeight === LINE_HEIGHTS.relaxed,
          "harsh-ui-leading-loose": lineHeight === LINE_HEIGHTS.loose,
          [className]: className,
        })}
        {...otherProps}
      >
        {children}
      </Component>
    );
  }
);

Typography.propTypes = {
  weight: PropTypes.oneOf(Object.values(FONT_FAMILY)),
  component: PropTypes.oneOf(Object.values(COMPONENTS)),
  textTransform: PropTypes.oneOf(Object.values(TEXT_TRANSFORM)),
  lineHeight: PropTypes.oneOf(Object.values(LINE_HEIGHTS)),
  otherProps: PropTypes.object,
  className: PropTypes.string,
};

export default Typography;
