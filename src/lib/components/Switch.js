import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";
import classnames from "classnames";

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
};

const SIZE = {
  small: "small",
  medium: "medium",
};

const Switch = ({
  label,
  className,
  textClassName,
  onChange,
  checked,
  variant = VARIANT.primary,
  size = SIZE.small,
  disabled = false,
  prefixed = false,
  ...otherProps
}) => {
  return (
    <div className="harsh-ui-switch__container">
      <label
        className={classnames({
          "harsh-ui-switch__container--disabled": disabled,
          [className]: className,
        })}
      >
        {label && !prefixed && (
          <Typography
            component="body2"
            className={classnames({ [textClassName]: textClassName })}
          >
            {label}
          </Typography>
        )}
        <div
          className={classnames("harsh-ui-switch", {
            "harsh-ui-switch--medium": SIZE.medium === size,
          })}
        >
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...otherProps}
          />
          <span
            className={classnames("harsh-ui-switch__slider", {
              "harsh-ui-switch__slider--primary": variant === VARIANT.primary,
              "harsh-ui-switch__slider--secondary":
                variant === VARIANT.secondary,
              "harsh-ui-switch__slider--checked": disabled,
              "harsh-ui-switch__slider--disabled": disabled,
            })}
          />
        </div>
        {label && prefixed && (
          <Typography
            component="body2"
            className={classnames({ [textClassName]: textClassName })}
          >
            {label}
          </Typography>
        )}
      </label>
    </div>
  );
};

Switch.propTypes = {
  /** To specify the label of the switch*/
  label: PropTypes.string,
  /** To specify the class for the outermost container*/
  className: PropTypes.string,
  /** To specify the class for the text*/
  textClassName: PropTypes.string,
  /** Checks whether the Switch is checked or not*/
  checked: PropTypes.bool,
  /** A callback function which is called when selected radio option changes */
  onChange: PropTypes.func,
  /** To specify the varition of switch */
  variant: PropTypes.oneOf(Object.values(VARIANT)),
};

export default Switch;
