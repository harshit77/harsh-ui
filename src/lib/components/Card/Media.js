import React from "react";
import { Dass } from "../../icons";
import PropTypes from "prop-types";

const Media = ({ title, icon }) => {
  return (
    <>
      <span className="harsh-ui-card__media--icon">{icon || <Dass />}</span>
      <span>{title}</span>
    </>
  );
};

Media.propTypes = {};

export default Media;
