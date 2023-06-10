import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { NavLink } from "react-router-dom";

const Item = ({ className, children, isClickable, isLastItem, separator }) => {
  let Breadcrumb_separator,
    Parent = "div",
    elementProps = {};

  if (typeof separator !== "string") {
    Breadcrumb_separator = separator;
  }

  if (isClickable) {
    Parent = NavLink;
    elementProps.to = isClickable;
  }

  return (
    <Parent
      className={classnames("harsh-ui-breadcrumb--item", {
        [className]: className,
        "harsh-ui-breadcrumb--active": isClickable,
      })}
      {...elementProps}
    >
      <div>{children}</div>
      {!isLastItem && (
        <div className="harsh-ui-breadcrumb--separator">
          {Breadcrumb_separator ? <Breadcrumb_separator /> : separator}
        </div>
      )}
    </Parent>
  );
};

Item.propTypes = {
  /** To specify the class for outermost container of breadcrumb */
  className: PropTypes.string,
  /** To specify the children under <Breadcrumb.Item/> */
  children: PropTypes.node,
  /** To specify whether Item is clickable or not for routing*/
  isClickable: PropTypes.bool,
  /** To specify whether it is lastItem or not.Bydefault it will handled internally*/
  isLastItem: PropTypes.bool,
  /** To specify type of separator.It can be string or node*/
  separator: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

export default Item;
