

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/preset-create-react-app",
  ],
  staticDirs:["../src/stories/assets/"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};

