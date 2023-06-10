import React from "react";
import PropTypes from "prop-types";
import { Receipt } from "../../icons";
import classnames from "classnames";

const DecriptionCard = ({ icon, description, title, variant = "primary", ...props }) => {
  return (
    <>
      <div
        className={classnames(
          { "harsh-ui-card__primaryTitle": variant === "primary" },
          { "harsh-ui-card__secondaryTitle": variant === "secondary" }
        )}
      >
        {variant === "secondary" && (
          <span className="harsh-ui-card__primaryTitle--icon">
            {icon || <Receipt />}
          </span>
        )}
        <span {...props}>{title}</span>
      </div>
      {variant === "secondary" && (
        <div className="harsh-ui-card__description">{description}</div>
      )}
    </>
  );
};

DecriptionCard.propTypes = {};

export default DecriptionCard;
