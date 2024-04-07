import React from "react";
import NoRecordFound from "../../lib/components/NoRecordFound";

export default {
  title: "Components/NoRecordFound",
  component: NoRecordFound,
  parameters: {
    docs: {
      description: {
        component: '`import { NoRecordFound } from "HarshUI/index"`',
      },
    },
  },
};

const Template = (args) => <NoRecordFound {...args} />;

export const Default = Template.bind({});

Default.args = {
  primary: "No record found!",
};
