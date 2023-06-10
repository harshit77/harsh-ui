import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Toast from "./Toast";
import {
  CheckCircle,
  ErrorFilledOn,
  InfoFilledon,
  WarningFilledOn,
} from "../../icons";

const TOAST_CONFIG = {
  autoClose: 3000,
  position: toast.POSITION.BOTTOM_RIGHT,
  hideProgessBar: false,
  closeButton: () => {},
};

const TOAST_ICON = {
  success: <CheckCircle />,
  error: <ErrorFilledOn />,
  warning: <WarningFilledOn />,
  info: <InfoFilledon />,
};

const withConfig =
  (type, toastrFunc) =>
  (title, message, ...toastrConfig) => {
    const { buttonLabel, onClick, buttonClassname, ...customConfig } =
      toastrConfig;
    const config = {
      ...TOAST_CONFIG,
      icon: TOAST_ICON[type],
      toastId: `${title}-${message}`,
      ...customConfig[0],
    };
    toastrFunc({ type, title, message, buttonLabel, onClick, config });
  };

const showSuccessToastr = withConfig(
  "success",
  ({ type, title, message, onClick, buttonLabel, buttonClassname, config }) =>
    toast.success(
      <Toast
        type={type}
        title={title}
        message={message}
        buttonLabel={buttonLabel}
        buttonClassname={buttonClassname}
        onClick={onClick}
      />,
      config
    )
);

const showInfoToastr = withConfig(
  "info",
  ({ type, title, message, onClick, buttonLabel, buttonClassname, config }) =>
    toast.info(
      <Toast
        type={type}
        title={title}
        message={message}
        buttonLabel={buttonLabel}
        buttonClassname={buttonClassname}
        onClick={onClick}
      />,
      config
    )
);

const showWarningToastr = withConfig(
  "warning",
  ({ type, title, message, onClick, buttonLabel, buttonClassname, config }) =>
    toast.warning(
      <Toast
        type={type}
        title={title}
        message={message}
        buttonLabel={buttonLabel}
        buttonClassname={buttonClassname}
        onClick={onClick}
      />,
      config
    )
);

const isError = (e) => e && e.stack && e.message;
const isAxiosError = (e) => typeof e === "object" && e.isAxiosError === true;
const isString = (s) => typeof s === "string" || s instanceof String;

const withParsedErrorMsg =
  (toastrFunc) =>
  (title, errorObject, ...toastrConfig) => {
    let errorMessage;
    if (isAxiosError(errorObject)) {
      const { error = "", errors = [] } = errorObject?.response?.data || {};
      errorMessage =
        error || (errors && errors.join(" ")) || errorObject.message;
    } else if (isError(errorObject)) errorMessage = errorObject.message;
    else if (isString(errorObject)) errorMessage = errorObject;
    else errorMessage = "Something went wrong.";

    const { buttonLabel, onClick, ...customConfig } = toastrConfig;
    toastrFunc(title, errorMessage, {
      buttonLabel,
      onClick,
      autoClose: 7000,
      ...customConfig,
    });
  };

const showErrorToastr = withParsedErrorMsg(
  withConfig(
    "error",
    ({ type, title, message, buttonLabel, onClick, config }) =>
      toast.error(
        <Toast
          type={type}
          title={title}
          message={message}
          buttonLabel={buttonLabel}
          onClick={onClick}
        />,
        config
      )
  )
);

const Toastr = {
  success: showSuccessToastr,
  info: showInfoToastr,
  warning: showWarningToastr,
  error: showErrorToastr,
};

Toastr.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(["success", "warning", "info", "error"]),
};

export default Toastr;
