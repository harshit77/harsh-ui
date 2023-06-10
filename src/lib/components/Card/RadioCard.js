import React from "react";
import Avatar from "../Avatar";
import RadioButton from "../RadioButton";
import PropTypes from "prop-types";

const RadioCard = ({ title, selected }) => {
  return (
    <div className="harsh-ui-card__radio--title">
      <div className="harsh-ui-card__radio--title--caption">
        <Avatar
          size="small"
          user={{ name: title.substring(0, 2).toUpperCase() }}
        />
        <span>{title}</span>
      </div>
      <RadioButton>
        <RadioButton.Item checked={selected} />
      </RadioButton>
    </div>
  );
};

RadioCard.propTypes = {};

export default RadioCard;
