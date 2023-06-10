import React from "react";
import { Indicator } from "../../lib/components";

const TYPE = {
  success: "success",
  info: "info",
  error: "error",
  warning: "warning",
};

export default {
  title: "Components/Indicator",
  component: Indicator,
  argTypes: {
    type: {
      control: "select",
      options: [...Object.values(TYPE)],
    },
  },
  parameters: {
    docs: {
      description: {
        component: '`import { Indicator } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Indicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 20,
  width: 50,
  height: 50,
  label: "Capacity",
};

Default.argTypes = Indicator.props;

export const Circular = () => {
  return <Indicator percentage={20} width={50} height={50} label="Capacity" />;
};

export const Variants = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        <Indicator percentage={20} width={50} height={50} label="Capacity" />
      </div>
      <div>
        <Indicator
          percentage={90}
          width={50}
          height={50}
          label="Capacity"
          type="error"
        />
      </div>
      <div>
        <Indicator
          percentage={50}
          width={50}
          height={50}
          label="Capacity"
          type="warning"
        />
      </div>
    </div>
  );
};

export const VariantsWithSize = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        <Indicator percentage={20} width={50} height={50} label="Capacity" />
      </div>
      <div>
        <Indicator
          percentage={90}
          width={100}
          height={100}
          label="Capacity"
          type="error"
        />
      </div>
      <div>
        <Indicator
          percentage={50}
          width={150}
          height={150}
          label="Capacity"
          type="warning"
        />
      </div>
    </div>
  );
};

export const Linear = () => {
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <div>
        <Indicator
          percentage={20}
          width={100}
          height={10}
          label="Capacity"
          linear
        />
      </div>
      <div>
        <Indicator
          percentage="90"
          width={100}
          height={10}
          label="Capacity"
          type="error"
          linear
        />
      </div>
      <div>
        <Indicator
          percentage={50}
          width={150}
          height={10}
          label="Capacity"
          type="warning"
          linear
        />
      </div>
    </div>
  );
};
