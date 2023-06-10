import React from "react";
import Button from "../Button";
import { CancelClear } from "../../icons";
import PropTypes from "prop-types";

const Toast = ({ title, message, buttonLabel, onClick, buttonClassname }) => {
  return (
    <div className="harsh-ui-toastr__wrapper">
      <div className="harsh-ui-toastr__message">
        <div className="harsh-ui-toastr__message--title">{title}</div>
        <div className="harsh-ui-toastr__message--content">{message}</div>
      </div>
      {buttonLabel && (
        <Button
          small="small"
          variant="secondary"
          onClick={onClick}
          className={buttonClassname}
        />
      )}
      <span className="harsh-ui-toastr__message--content">
        <CancelClear />
      </span>
    </div>
  );
};

Toast.propTypes = {};

export default Toast;
