import React from "react";
import { Spinner } from "../../lib/components";

export default {
  title: "Components/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: '`import { Spinner } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  theme: "dark",
};
