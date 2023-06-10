import React from "react";
import { Map } from "../../lib/components";
import { LocationPoint } from "../../lib/icons";

export default {
  title: "Layouts/Map",
  component: Map,
  parameters: {
    docs: {
      description: {
        component: '`import { Map } from "harsh-ui/Index"`',
      },
    },
  },
};

const markers = [
  {
    content: "Data Center 1",
    coordinates: [499.4217041223607, 406.42],
    variant: "primary",
  },
  {
    content: "Data Center 2",
    coordinates: [299.4217041223607, -16.42],
    variant: "primary",
  },
  {
    content: "Data Center 3",
    coordinates: [405.4217041223607, 66.42],
    variant: "primary",
  },
  {
    content: "Data Center 4",
    coordinates: [-160.006, 69.7128],
    variant: "secondary",
  },
];

const Template = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {
  markers,
  icon: LocationPoint,
};

export const MapWithToolTip = Template.bind({});
MapWithToolTip.args = {
  markers,
  icon: LocationPoint,
  toolTip: true,
};
