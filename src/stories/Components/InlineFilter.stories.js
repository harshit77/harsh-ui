import React from "react";
import InlineFilter from "../../lib/components/InlineFilter";

export default {
  title: "Components/InlineFilter",
  component: InlineFilter,
  parameters: {
    docs: {
      description: {
        component: '`import { Input } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <InlineFilter {...args} />;

const OPERATOR = {
  STARTS_WITH: {
    id: "STARTS_WITH",
    filterString: "startswith:",
    label: "Starts With",
  },
  EQUAL: { id: "EQUAL", filterString: "equal:", label: "is" },
  CONTAINS: { id: "CONTAINS", filterString: "contains:", label: "contains" },
  IN: { id: "IN", filterString: "in:", label: "one of" },
};

const filterOptions = [
  {
    label: "Id",
    field: "id",
    operator: OPERATOR.EQUAL,
    active: false,
  },
  {
    label: "Summary",
    field: "summary",
    operator: OPERATOR.CONTAINS,
    active: false,
  },
  {
    label: "Priority",
    field: "priority",
    operator: OPERATOR.EQUAL,
    currentValue: "true",
    active: true,
    options: [
      {
        id: "true",
        value: "Yes",
      },
      {
        id: "false",
        value: "No",
      },
    ],
  },
  {
    label: "Status",
    field: "status",
    operator: OPERATOR.IN,
    options: [
      {
        id: "CUSTOMER_EXPERIENCE_NEW",
        value: "New (Customer Experience)",
        checked: true,
      },
      {
        id: "CUSTOMER_EXPERIENCE_ASSIGNED",
        value: "Assigned (Customer Experience)",
        checked: true,
      },
      {
        id: "CUSTOMER_EXPERIENCE_SCHEDULED",
        value: "Scheduled (Customer Experience)",
        checked: true,
      },
    ],
    active: false,
  },
];

export const Default = Template.bind({});
Default.args = {
  options: filterOptions,
  onChangeFilterOption: (filterString) => {
    console.log(filterString);
  },
};
