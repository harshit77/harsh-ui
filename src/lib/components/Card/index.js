import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import DecriptionCard from "./DecriptionCard";
import RadioCard from "./RadioCard";
import Media from "./Media";

const TYPE = {
  xsmall: "xsmall",
  small: "small",
  medium: "medium",
};

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
  radio: "radio",
  media: "media",
};

const Card = ({
  type = TYPE["medium"],
  variant = VARIANT.primary,
  className,
  icon,
  title,
  description,
  onClick,
  selected,
  disabled,
  ...props
}) => {
  return (
    <div
      className={classnames("harsh-ui-card", {
        "harsh-ui-card__size--xsmall":
          type === TYPE.xsmall && variant === VARIANT.secondary,
        "harsh-ui-card__size--small":
          type === TYPE.small && variant === VARIANT.secondary,
        "harsh-ui-card__size--medium":
          type === TYPE.medium && variant === VARIANT.secondary,
        "harsh-ui-card__radio": variant === VARIANT.radio,
        "harsh-ui-card__media": variant === VARIANT.media,
        "harsh-ui-card__selected": selected,
        "harsh-ui-card__disabled": disabled,
        [className]: className,
      })}
      onClick={!disabled ? onClick : () => {}}
    >
      {[VARIANT.primary, VARIANT.secondary].includes(variant) && (
        <DecriptionCard
          icon={icon}
          title={title}
          description={description}
          variant={variant}
          {...props}
        />
      )}

      {variant === VARIANT.radio && (
        <RadioCard title={title} selected={selected} />
      )}
      {variant === VARIANT.media && <Media title={title} icon={icon} />}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(Object.values(TYPE)),
  className: PropTypes.string,
  icon: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(VARIANT)),
};

export default Card;
