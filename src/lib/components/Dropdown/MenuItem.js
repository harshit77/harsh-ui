import PropTypes, { number } from "prop-types";
import React from "react";
import classnames from "classnames";

const MenuItem = ({
  className,
  children,
  prefix,
  suffix,
  onClick,
  id,
  selected,
  ...otherProps
}) => {
  return (
    <li
      className={classnames(
        "harsh-ui-dropdown__popup-menu-item",
        { "harsh-ui-dropdown__popup-menu--selected": selected },
        { [className]: className }
      )}
      id={id}
      {...otherProps}
    >
      {prefix && (
        <div className="harsh-ui-dropdown__popup-menu-item-prefix">
          {prefix}
        </div>
      )}
      {children}
      {suffix && (
        <div
          className="harsh-ui-dropdown__popup-menu-item-sufix"
          id={`suffix-${id}`}
          onClick={onClick}
        >
          {suffix}
        </div>
      )}
    </li>
  );
};

MenuItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  children: PropTypes.node,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

export default MenuItem;
