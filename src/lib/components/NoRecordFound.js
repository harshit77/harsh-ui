import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";
import { Simple } from "../icons";
import classnames from "classnames";

const NotRecordFound = ({
  className,
  primary = "No record found!",
  secondary,
}) => {
  return (
    <div
      className={classnames("harsh-ui-noRecordFound", {
        [className]: className,
      })}
    >
      <Simple width={94} height={58.75} />
      {primary && (
        <Typography component="h2" family="medium">
          {primary}
        </Typography>
      )}
      {secondary && <Typography component="h3-1">{secondary}</Typography>}
    </div>
  );
};

NotRecordFound.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
};

export default NotRecordFound;
