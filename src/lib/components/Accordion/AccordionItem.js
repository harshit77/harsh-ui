import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const AccordionItem = ({ children, className }) => {
  return (
    <div
      className={classnames("harsh-ui-accordion__item--inner", {
        [className]: className,
      })}
    >
      <div className="harsh-ui-accordion__item--inner--content">
        {children}
      </div>
    </div>
  );
};

AccordionItem.propTypes = {};
AccordionItem.displayName = "AccordionItem";

export default AccordionItem;
