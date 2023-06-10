import React, { useEffect } from "react";
import { addDecorator } from "@storybook/react";
import "../src/lib/styles/index.scss";
import { MemoryRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";

addDecorator((story) => <MemoryRouter>{story()}</MemoryRouter>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      icon: "lightning",
      items: ["light", "dark"],
      name: true,
      dynamicTitle: true,
    },
  },
};

const Themes = {
  dark: "harsh-ui-theme--dark",
  light: "harsh-ui-theme--light",
};

const clearStyles = (element) => {
  for (const className of Object.values(Themes)) {
    element.classList.remove(className);
  }
};

const applyStyle = (element, className) => {
  element.classList.add(className);
};

const themeScheme = (Story, context) => {
  useEffect(() => {
    const body = window.document.body;
    clearStyles(body);
    applyStyle(body, `harsh-ui-theme--${context.globals.theme}`);
    return () => {
      clearStyles(body);
    };
  }, [context.globals.theme]);

  return <Story />;
};

export const decorators = [themeScheme];
