import React, { useState } from "react";
import { Cancel, DescriptionFilledYes } from "../../icons";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectFiles = ({
  icon,
  title,
  onChange,
  className,
  disabled,
  acceptedFile,
  selectedFiles,
}) => {
  const [currentSelectedFiles, setCurrentSelectedFiles] =
    useState(selectedFiles);

  const handleChangeImage = (e) => {
    const getFile = e.target.files[0];
    setCurrentSelectedFiles((prevFiles) => [...prevFiles, getFile]);
    onChange([...currentSelectedFiles, getFile]);
  };

  const handleCancel = (removeFileIndex) => {
    currentSelectedFiles.splice(removeFileIndex, 1);
    setCurrentSelectedFiles([...currentSelectedFiles]);
    onChange([...currentSelectedFiles]);
  };

  return (
    <div
      className={classnames("harsh-ui-upload", { [className]: className })}
    >
      <label
        className={classnames("harsh-ui-upload__selectFiles", {
          "harsh-ui-upload__disabled": disabled,
        })}
      >
        <input
          id="harsh-ui-upload__selector-image"
          type="file"
          name="selector-image"
          onChange={handleChangeImage}
          accept={acceptedFile}
        />
        {<div className="harsh-ui-upload__selectFiles--icons">{icon}</div>}
        {title}
      </label>

      {currentSelectedFiles.length > 0 && (
        <div className="harsh-ui-upload__selectFiles--lists">
          {currentSelectedFiles.map((file, index) => (
            <div className="harsh-ui-upload__selectFiles--lists--list">
              <div className="list--title">
                <DescriptionFilledYes width="16" height="16" />
                <span className="list--title--ellipsis">{file.name}</span>
              </div>
              <Cancel onClick={handleCancel.bind(this, index)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectFiles.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default SelectFiles;
