import React from "react";
import Detail from "../../lib/components/Detail";

export default {
  title: "Components/Detail",
  component: Detail,
  parameters: {
    docs: {
      description: {
        component: '`import { Detail } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Detail {...args} />;

const DETAILS = {
  section1: {
    sectionName: "Details",
    data: [
      {
        name: "Cage",
        value: 71,
      },
      {
        name: "Customer Id",
        value: 86396,
      },
      {
        name: "Data center name",
        value: "VW - RCH01",
      },
      {
        name: "Data center type",
        value: "Dizzion",
      },
      {
        name: "Portal url",
        value: "https://supportcenter.viawes...",
      },
      {
        name: "Support email",
        value: "netsupport@viawest.net",
      },
      {
        name: "Work phone",
        value: "+18668089378",
      },
    ],
  },
  section2: {
    sectionName: "Configuration",
    data: [
      {
        name: "Has camera",
        value: "Yes",
      },
      {
        name: "Is biometeric",
        value: "Yes",
      },
      {
        name: "Network type",
        value: "NSX_V",
      },
      {
        name: "Power type id",
        value: "208v",
      },
      {
        name: "Rack type id",
        value: "48v",
      },
    ],
  },

  section3: {
    sectionName: "Address",
    data: [
      {
        name: "Address line 1",
        value: "3010 Waterview Parkway",
      },
      {
        name: "Address line 1",
        value: "-",
      },
      {
        name: "Airport code",
        value: "RCH",
      },
      {
        name: "City",
        value: "Richardson",
      },
      {
        name: "Country",
        value: "United State",
      },
      {
        name: "Region",
        value: "United State",
      },
      {
        name: "State",
        value: "Texas",
      },

      {
        name: "Zipcode",
        value: "75080",
      },
    ],
  },
};

export const Default = Template.bind({});
Default.args = {
  details: DETAILS,
  grid: 4,
};

export const CustomGridProp = Template.bind({});
CustomGridProp.args = {
  details: DETAILS,
  grid: 3,
};

export const CustomGridWithHorizontalView = Template.bind({});
CustomGridWithHorizontalView.args = {
  horizontal: true,
  details: DETAILS,
  grid: 2,
};
