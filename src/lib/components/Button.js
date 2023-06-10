import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classnames from "classnames";

const ICON_POSITION = {
  left: "left",
  right: "right",
};

const BUTTON_SIZE = {
  small: "small",
  medium: "medium",
  large: "large",
};

const BUTTON_VARIANT = {
  primary: "primary",
  secondary: "secondary",
  text: "text",
  solidLinked: "solidLinked",
  solidGrayed: "solidGrayed",
  link: "link",
  danger: "danger",
  dropdown: "dropdown",
  dropdownAction: "dropdownAction",
  dropdownFilter: "dropdownFilter",
};

const Button = forwardRef(
  (
    {
      type = "button",
      label,
      icon,
      iconPosition = ICON_POSITION.right,
      to,
      disabled = false,
      size = BUTTON_SIZE.small,
      fullWidth,
      className,
      onClick,
      href,
      suffixNode1,
      suffixNode2,
      variant = BUTTON_VARIANT.primary,
      active = false,
      ...otherProps
    },
    ref
  ) => {
    let RenderedComponent, elementSpecificProp;

    if (to) {
      RenderedComponent = Link;
      elementSpecificProp = {
        to,
      };
    } else if (href) {
      RenderedComponent = "a";
      elementSpecificProp = {
        href,
      };
    } else {
      RenderedComponent = "button";
      elementSpecificProp = {
        type,
      };
    }
    return (
      <RenderedComponent
        ref={ref}
        className={classnames(
          "harsh-ui-button",
          {
            "harsh-ui-button__variant--primary":
              variant === BUTTON_VARIANT.primary,
            "harsh-ui-button__variant--secondary":
              variant === BUTTON_VARIANT.secondary,
            "harsh-ui-button__variant--solidLinked":
              variant === BUTTON_VARIANT.solidLinked,
            "harsh-ui-button__variant--solidGrayed":
              variant === BUTTON_VARIANT.solidGrayed,
            "harsh-ui-button__variant--danger":
              variant === BUTTON_VARIANT.danger,
            "harsh-ui-button__variant--dropdown":
              variant === BUTTON_VARIANT.dropdown,
            "harsh-ui-button__variant--dropdown_action":
              variant === BUTTON_VARIANT.dropdownAction,
            "harsh-ui-button__variant--dropdown_filter":
              variant === BUTTON_VARIANT.dropdownFilter,
            "harsh-ui-button__variant--text": variant === BUTTON_VARIANT.text,
            "harsh-ui-button__variant--link": variant === BUTTON_VARIANT.link,

            "harsh-ui-button__size--medium": size === "medium",
            "harsh-ui-button__size--large": size === "large",
            "harsh-ui-button__suffix": suffixNode1 && suffixNode2,
            "harsh-ui-button__active": active,
            "harsh-ui-button__icon--right":
              iconPosition === ICON_POSITION.right && !!label,
            "harsh-ui-button__width--full": fullWidth,
            disabled: disabled,
          },
          { [className]: className }
        )}
        disabled={disabled}
        onClick={onClick}
        {...elementSpecificProp}
        {...otherProps}
      >
        {icon && <div className="harsh-ui-button__icon">{icon}</div>}
        {label && <div className="harsh-ui-button__label">{label}</div>}
        {suffixNode1 && (
          <div className="harsh-ui-button__suffixNode1">
            {suffixNode1 && <>{suffixNode1}</>}
          </div>
        )}
        {suffixNode2 && (
          <div className="harsh-ui-button__suffixNode2">
            {suffixNode2 && (
              <div className="harsh-ui-button__icon--right">
                {suffixNode2}
              </div>
            )}
          </div>
        )}
      </RenderedComponent>
    );
  }
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(Object.values(ICON_POSITION)),
  to: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANT)),
  suffixNode1: PropTypes.node,
  suffixNode2: PropTypes.node,
};

export default Button;
