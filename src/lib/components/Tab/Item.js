import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classnames from "classnames";

const noop = () => {};

const Item = ({
  active,
  className = "",
  children,
  icon = null,
  onClick = noop,
  activeClassName = "",
  ...otherProps
}) => {
  let Parent = "button";

  if (activeClassName) {
    Parent = NavLink;
  }

  return (
    <Parent
      className={classnames(["harsh-ui-tab", className], {
        active: active,
      })}
      onClick={onClick}
      {...otherProps}
    >
      {icon && <span className="harsh-ui-tab__icon">{icon}</span>}
      {children}
    </Parent>
  );
};

Item.displayName = "Tab.Item";

Item.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
};

export default Item;
