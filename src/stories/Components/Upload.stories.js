import React, { forwardRef, useState } from "react";

import { Upload, Toastr } from "../../lib/components";

export default {
  title: "Components/Upload",
  component: Upload,
  parameters: {
    docs: {
      description: {
        component: '`import { Upload } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  return <Upload onChange={(selectedFiles) => console.log(selectedFiles)} />;
};

export const Preview = (args) => {
  return (
    <Upload
      variant="preview"
      acceptedFile="pdf"
      onChange={(selectedFiles) => console.log(selectedFiles)}
    />
  );
};

const onAxiosRequest = (file, onUploadProgress) => {
  setTimeout(() => {
    try {
      let formData = new FormData();

      formData.append("file", file);
      const axiosSuccess = {
        isAxiosError: false,
        config: {
          url: "https://c3.HarshUI.com",
        },
        response: {
          data: {
            file: "file.path",
          },
          status: 200,
        },
      };
      return axiosSuccess;
    } catch (e) {
      Toastr.error("Error Reported", e);
    }
  }, 10000);
  var i = 100;
  const myInterval = setInterval(() => {
    if (i >= 1000) {
      clearInterval(myInterval);
    }
    onUploadProgress({ loaded: i, total: 1000 });
    i = i + 100;
  }, 1000);
};

export const PreviewWithProgress = (args) => {
  const [progress, setProgress] = useState(0);

  const handleSelectedFile = (selectedFiles) => {
    setProgress(0);
    onAxiosRequest(selectedFiles, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    });
  };
  return (
    <Upload
      variant="previewSide"
      acceptedFile="pdf"
      onChange={handleSelectedFile}
      progress={progress}
      onCancel={() => console.log("Stop uploading")}
    />
  );
};

export const Disabled = (args) => (
  <Upload disabled selectedFiles={[new File(["test"], "test.png")]} />
);
