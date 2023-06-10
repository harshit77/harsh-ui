import PropTypes from "prop-types";
import React, { Children, cloneElement } from "react";
import classnames from "classnames";

const Menu = ({ className, children, onClick, ...otherProps }) => {
  return (
    <ul
      className={classnames("harsh-ui-dropdown__popup-menu", className)}
      {...otherProps}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          ...child.props,
          id: child.props.id || index,
          key: child.props.id || index,
          onClick,
        })
      )}
    </ul>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Menu;
