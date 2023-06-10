import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const VARIENT = {
  primary: "primary",
  secodary: "secondary",
};

const SIZE = {
  small: "small",
  medium: "medium",
  large: "large",
};

const Avatar = ({
  user,
  rounded = false,
  variant = VARIENT.primary,
  className,
  size = SIZE.small,
}) => {
  return (
    <div
      className={classnames(
        "harsh-ui-avatar",
        { "harsh-ui-avatar__rounded": rounded },
        { "harsh-ui-avatar__primary": VARIENT.primary === variant },
        {
          "harsh-ui-avatar__secondary": VARIENT.secodary === variant,
        },
        {
          "harsh-ui-avatar__size--small": SIZE.small === size,
        },
        {
          "harsh-ui-avatar__size--medium": SIZE.medium === size,
        },
        {
          "harsh-ui-avatar__size--large": SIZE.large === size,
        },
        { [className]: className }
      )}
    >
      {user?.img ? <img src={user.img} /> : user?.name?.substring(0, 2)}
    </div>
  );
};

Avatar.propTypes = {
  user: PropTypes.object,
  rounded: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(VARIENT)),
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZE)),
};
Avatar.displayName = "Avatar";

export default Avatar;
