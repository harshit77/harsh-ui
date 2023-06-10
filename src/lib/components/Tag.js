import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { CancelClear } from "../../lib/icons";

const SIZES = { small: "small", medium: "medium", large: "large" };

const TYPES = { outline: "outline", solid: "solid" };

const VARIANTS = {
  primary: "primary",
  secondary: "secondary",
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
};

const Tag = ({
  id,
  variant = VARIANTS.primary,
  children,
  icon,
  className = "",
  onClose,
  disabled = false,
  size = SIZES.small,
  type = TYPES.outline,
  ...otherProps
}) => {
  return (
    <div
      className={classnames(
        "harsh-ui-tag",
        {
          "harsh-ui-tag__size-large": size === SIZES.large,
          "harsh-ui-tag__size-small": size === SIZES.small,
          "harsh-ui-tag__size-medium": size === SIZES.medium,
          "harsh-ui-tag__type-outline": type === TYPES.outline,
          "harsh-ui-tag__type-solid": type === TYPES.solid,
          "harsh-ui-tag__variant-primary": variant === VARIANTS.primary,
          "harsh-ui-tag__variant-secondary": variant === VARIANTS.secondary,
          "harsh-ui-tag__variant-success": variant === VARIANTS.success,
          "harsh-ui-tag__variant-info": variant === VARIANTS.info,
          "harsh-ui-tag__variant-warning": variant === VARIANTS.warning,
          "harsh-ui-tag__variant-error": variant === VARIANTS.error,
        },
        className
      )}
      {...otherProps}
    >
      {icon && <span className="harsh-ui-tag__icon">{icon}</span>}

      {children}

      {onClose && (
        <span
          onClick={!disabled ? onClose : null}
          className="harsh-ui-tag__close"
        >
          <CancelClear id={id} />
        </span>
      )}
    </div>
  );
};

Tag.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),

  size: PropTypes.oneOf(Object.keys(SIZES)),

  children: PropTypes.node,

  type: PropTypes.oneOf(Object.keys(TYPES)),

  variant: PropTypes.oneOf(Object.keys(VARIANTS)),

  onClose: PropTypes.func,

  disabled: PropTypes.bool,

  className: PropTypes.string,
};

export default Tag;
