import React from "react";

import classnames from "classnames";
import { ArrowDown } from "../../icons";

const AccordionTitle = ({ onClick, children, className, variant }) => {
  return (
    <div
      className={classnames("harsh-ui-accordion__item", {
        [className]: className,
      })}
      onClick={onClick}
    >
      <div
        className={classnames("harsh-ui-accordion__item--title", {
          "harsh-ui-accordion__item--title_secondary":
            variant === "secondary",
        })}
      >
        {children}
      </div>
      <ArrowDown className="harsh-ui-accordion__item--icon" />
    </div>
  );
};

AccordionTitle.propTypes = {};
AccordionTitle.displayName = "AccordionTitle";

export default AccordionTitle;
