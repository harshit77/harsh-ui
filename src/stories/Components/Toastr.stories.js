import React from "react";
import { Toastr, Button } from "../../lib/components";
import { ToastContainer } from "react-toastify";

export default {
  title: "Overlays/Toastr",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '`import { Toastr } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <Button
        size="medium"
        label="Info Toastr"
        onClick={() =>
          Toastr.info("Information", "Information will go over here ")
        }
      />
      <Button
        size="medium"
        label="Warning Toastr"
        onClick={() =>
          Toastr.warning("Warning", "You have successfully save your filter. ")
        }
      />
      <Button
        size="medium"
        label="Success Toastr"
        onClick={() =>
          Toastr.success(
            "Successfully Saved",
            "You have successfully save your filter. "
          )
        }
      />
      <Button
        size="medium"
        label="Error Toastr"
        onClick={() =>
          Toastr.error(
            "Error Reported",
            Error("Some error occured at the Server Side")
          )
        }
      />
      <ToastContainer />
    </div>
  );
};

export const AxiosError = () => {
  const onStringError = () => {
    Toastr.error("This is a plain text error Toastr!");
  };

  const onAxiosStringError = () => {
    try {
      // Dummy axios error object
      const axiosError = {
        isAxiosError: true,
        config: {
          url: "https://c3.dizzion.com",
        },
        response: {
          data: {
            error: "Not found",
          },
          status: 404,
        },
      };
      throw axiosError;
    } catch (e) {
      Toastr.error("Error Reported", e);
    }
  };

  const onAxiosArrayError = () => {
    try {
      // Dummy axios error object
      const axiosError = {
        isAxiosError: true,
        config: {
          url: "https://c3.dizzion.com",
        },
        response: {
          data: {
            errors: ["A is required", "B is required"],
          },
        },
      };
      throw axiosError;
    } catch (e) {
      Toastr.error("Error Reported", e);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <Button size="medium" label="Error Toastr" onClick={onStringError} />
      <Button
        size="medium"
        label="Throw an axios error"
        onClick={onAxiosStringError}
      />
      <Button
        size="medium"
        label="Throw an axios error with array of error messages"
        onClick={onAxiosArrayError}
      />
      <ToastContainer />
    </div>
  );
};
