import React from "react";
import PropTypes from "prop-types";
import SelectFiles from "./SelectFiles";
import Preview from "./Preview";
import { FileUpload, CloudUpload } from "../../icons";
import Typography from "../Typography";

const VARIANT = {
  primary: "primary",
  secondary: "secondary",
  preview: "preview",
  previewSide: "previewSide",
};

const dragtitle = (variant) => (
  <Typography
    component={variant === VARIANT.preview ? "body1" : "h3"}
    family="medium"
    className={`harsh-ui-upload__${variant}--dragTitle`}
  >
    Drag and drop your file here or
    <Typography
      component={variant === VARIANT.preview ? "body1" : "h3"}
      family="medium"
      className={`harsh-ui-upload__${variant}--innerTitle`}
    >
      Choose file
    </Typography>
  </Typography>
);

const Upload = ({
  icon = <FileUpload />,
  selectedFiles = [],
  title,
  className,
  variant = VARIANT.primary,
  disabled = false,
  acceptedFile = ".jpg,.jpeg,.png,.pdf,.xls",
  onChange = () => {},
  progress,
  onCancel = () => {},
}) => {
  title = [VARIANT.preview, VARIANT.previewSide].includes(variant)
    ? dragtitle(variant)
    : "Upload Files";

  icon = [VARIANT.preview, VARIANT.previewSide].includes(variant) ? (
    <CloudUpload width="80" height="80" />
  ) : (
    <FileUpload />
  );
  return (
    <>
      {variant === VARIANT.primary && (
        <SelectFiles
          icon={icon}
          title={title}
          onChange={onChange}
          selectedFiles={selectedFiles}
          className={className}
          disabled={disabled}
          acceptedFile={acceptedFile}
        />
      )}

      {[VARIANT.preview, VARIANT.previewSide].includes(variant) && (
        <Preview
          variant={variant}
          icon={icon}
          title={title}
          onChange={onChange}
          selectedFiles={selectedFiles}
          className={className}
          disabled={disabled}
          acceptedFile={acceptedFile}
          progress={progress}
          onCancel={onCancel}
        />
      )}
    </>
  );
};

Upload.propTypes = {};

export default Upload;
