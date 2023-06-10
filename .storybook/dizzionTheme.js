import { create } from "@storybook/theming";
import dizzionLogo from "./dizzion_logo.png";

export default create({
  colorPrimary: "#0048fd",
  colorSecondary: "#0048fd",

  // UI
  appBg: "#1c1c1c",
  appContentBg: "#161616",
  appBorderColor: "#121212",
  appBorderRadius: 12,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "white",
  barBg: "#333647",

  // Form colors
  inputBg: "transparent",
  inputBorder: "silver",
  inputTextColor: "#393939",
  inputBorderRadius: 4,
  base: "dark",
  brandTitle: "Dizzion",
  brandUrl: "http://Dizzion.com",
  brandImage: dizzionLogo,
  brandTarget: "_self",
});
