import React, { Children, cloneElement, isValidElement } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { ArrowRight } from "../../icons";
import Item from "./Item";

const Breadcrumb = ({ className, children, separator = ArrowRight }) => {
  const arrayOfChildren = Children.toArray(children).filter((child) =>
    isValidElement(child)
  );
  return (
    <div
      className={classnames("harsh-ui-breadcrumb", {
        [className]: className,
      })}
    >
      {arrayOfChildren.map((child, index) =>
        cloneElement(child, {
          ...child.props,
          isClickable: child.props.to,
          isLastItem: arrayOfChildren.length - 1 === index,
          separator,
        })
      )}
    </div>
  );
};

Breadcrumb.propTypes = {
  /** To specify the class for outermost container of breadcrumb */
  className: PropTypes.string,
  /** To specify children of breadcrumb */
  children: PropTypes.node,
  /** To specify children of breadcrumb. It can be  `/` or `>` or icon such as `<ArrowRight/>`  */
  separator: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
Breadcrumb.Item = Item;

export default Breadcrumb;
