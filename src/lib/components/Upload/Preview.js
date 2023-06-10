import React, { useCallback, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { useDropzone } from "react-dropzone";
import {
  Cancel,
  DeleteFilledOff,
  ErrorFilledOn,
  InsertDriveFile,
} from "../../icons";
import FileViewer from "react-file-viewer";
import { Typography, Modal, Indicator } from "../../components";

const getAcceptedFileType = (type) => {
  const getTypes = type.split(",");
  let generateTypeString = {};
  getTypes.forEach((fileType) => {
    switch (fileType) {
      case "pdf":
        generateTypeString = { ...generateTypeString, "application/pdf": [] };
        break;
      case "png":
      case ".jpg":
      case ".png":
        generateTypeString = { ...generateTypeString, ["image/*"]: [] };
        break;
    }
  });
  return generateTypeString;
};

const Preview = ({
  icon,
  title,
  onChange,
  variant,
  className,
  disabled,
  acceptedFile,
  selectedFiles,
  progress = undefined,
  onCancel,
}) => {
  const [currentSelectedFiles, setCurrentSelectedFiles] =
    useState(selectedFiles);
  const [progressBar, setProgressBar] = useState(undefined);
  const [showModal, setShowModal] = useState({
    currentFile: undefined,
    show: false,
  });
  const listOfUploadedFiles = useRef(0);

  const progressRef = useRef(null);

  useEffect(() => {
    if (!!progress) {
      const elementWidth = progressRef.current.clientWidth * 0.9;
      const percentage = (progress * elementWidth) / 100;
      if (percentage === elementWidth) {
        listOfUploadedFiles.current += 1;
      }
      setProgressBar(percentage);
    }
  }, [progress, progressRef.current]);

  const handleModal = (currentFile) =>
    setShowModal({ currentFile: currentFile, show: true });

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;

        setCurrentSelectedFiles((prevFiles) => [
          ...prevFiles,
          { file, localContent: binaryStr },
        ]);
        onChange([...currentSelectedFiles, file]);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    noClick: true,
    onDrop,
    accept: getAcceptedFileType(acceptedFile),
  });

  const handleCancel = (removeFileIndex, e) => {
    e.stopPropagation();
    currentSelectedFiles.splice(removeFileIndex, 1);
    setCurrentSelectedFiles([...currentSelectedFiles]);
    onChange([...currentSelectedFiles]);
  };

  const handleUploadCancel = (removeFileIndex, e) => {
    e.stopPropagation();
    currentSelectedFiles.splice(removeFileIndex, 1);
    setCurrentSelectedFiles([...currentSelectedFiles]);
    onCancel(e);
  };

  return (
    <div
      className={classnames("harsh-ui-upload__container", {
        "harsh-ui-upload__container--col": variant === "previewSide",
      })}
    >
      <label
        {...getRootProps({
          className: classnames(
            "harsh-ui-upload",
            "harsh-ui-upload__preview",
            { "harsh-ui-upload__previewSide": variant === "previewSide" },
            { "harsh-ui-upload__disabled": disabled },
            { [className]: className }
          ),
        })}
      >
        <input {...getInputProps()} />
        {<div className="harsh-ui-upload__selectFiles--icons">{icon}</div>}
        {title}
      </label>
      {currentSelectedFiles.length > 0 &&
        variant === "preview" &&
        currentSelectedFiles.map((currentFile, index) => (
          <div
            key={index}
            className="harsh-ui-upload__previewList"
            onClick={handleModal.bind(this, currentFile)}
          >
            <div className="harsh-ui-upload__previewList--top">
              <FileViewer
                fileType={acceptedFile}
                filePath={currentFile.localContent ?? currentFile.path}
                errorComponent={<ErrorFilledOn width="120" height="120" />}
                onError={() => console.log("Error")}
              />
            </div>
            <div className="harsh-ui-upload__previewList--bottom">
              <span>
                {currentFile.localContent
                  ? currentFile.file.path
                  : currentFile.path}
              </span>
              <DeleteFilledOff onClick={handleCancel.bind(this, index)} />
            </div>
          </div>
        ))}
      {showModal.show && variant === "preview" && (
        <Modal
          isOpen
          onClose={() => setShowModal({ currentFile: undefined, show: false })}
        >
          <Modal.Header>
            <Typography component="body1">
              {showModal.currentFile.localContent
                ? showModal.currentFile.file.path
                : showModal.currentFile.path}
            </Typography>
          </Modal.Header>
          <Modal.Body>
            <FileViewer
              fileType={acceptedFile}
              filePath={
                showModal.currentFile.localContent ?? showModal.currentFile.path
              }
              errorComponent={<ErrorFilledOn width="120" height="120" />}
              onError={() => console.log("Error")}
            />
          </Modal.Body>
        </Modal>
      )}

      {currentSelectedFiles.length > 0 &&
        variant === "previewSide" &&
        currentSelectedFiles.map((currentFile, index) => (
          <div
            className={classnames("harsh-ui-upload__progress", {
              "harsh-ui-upload__progress--done":
                (progressRef.current?.clientWidth * 0.9) / progressBar === 1 ||
                listOfUploadedFiles.current > index,
            })}
            ref={progressRef}
            key={index}
          >
            <InsertDriveFile width="30" height="30" />
            <Indicator
              percentage={progressBar}
              width={progressRef.current?.clientWidth * 0.9}
              height={10}
              label={
                currentFile.localContent
                  ? currentFile.file.path
                  : currentFile.path
              }
              linear
              type="info"
            />
            <Cancel
              width="32"
              height="32"
              onClick={handleUploadCancel.bind(this, index)}
            />
          </div>
        ))}
    </div>
  );
};

export default Preview;
