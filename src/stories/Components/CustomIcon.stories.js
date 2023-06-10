import React from "react";
import { LocationPoint, Loop, Refresh } from "../../lib/icons";
import CustomIcon from "../../lib/components/CustomIcon";

const ICONS = {
  LocationPoint: LocationPoint,
  Loop: Loop,
  Refresh: Refresh,
};

export default {
  title: "Components/CustomIcon",
  component: CustomIcon,
  parameters: {
    docs: {
      description: {
        component: '`import { CustomIcon } from "@harsh-ui/index"`',
      },
    },
  },
  argTypes: {
    variant: { control: "select" },
    Icon: { control: "select", options: Object.keys(ICONS), mapping: ICONS },
  },
};

const Template = (args) => <CustomIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: LocationPoint,
};
Default.argTypes = CustomIcon.props;

export const SquareShape = Template.bind({});
SquareShape.args = {
  icon: LocationPoint,
  isSquare: true,
};

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
  icon: LocationPoint,
  variant: "secondary",
};

export const darkVariant = Template.bind({});
darkVariant.args = {
  icon: LocationPoint,
  variant: "dark",
  isSquare: true,
};
