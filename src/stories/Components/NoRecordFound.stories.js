import React from "react";
import NotRecordFound from "../../lib/components/NoRecordFound";

export default {
  title: "Components/NoRecordFound",
  component: NotRecordFound,
  parameters: {
    docs: {
      description: {
        component: '`import { NoRecordFound } from "dizzion/index"`',
      },
    },
  },
};

const Template = (args) => <NotRecordFound {...args} />;

export const Default = Template.bind({});

Default.args = {
  primary: "No record found!",
};
