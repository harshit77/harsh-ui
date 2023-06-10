import React from "react";
import Counter from "../../lib/components/Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  parameters: {
    docs: {
      description: {
        component: '`import { Counter } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = () => <Counter />;

export const SizeVariant = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
    <Counter size="small" />
    <Counter size="medium" />
    <Counter />
  </div>
);

export const Disabled = () => <Counter disabled />;

export const CounterWithMinMax = () => {
  const onChange = (newValue) => console.log(newValue);
  return (
    <Counter value={20} min={20} max={80} onChange={onChange.bind(this)} />
  );
};

export const SecondaryCounter = () => {
  const onChange = (newValue) => console.log(newValue);
  return (
    <Counter
      variant="secondary"
      value={20}
      min={0}
      max={80}
      onChange={onChange.bind(this)}
      label="Quantity"
    />
  );
};

export const SecondaryCounterDisabled = () => {
  const onChange = (newValue) => console.log(newValue);
  return (
    <Counter
      variant="secondary"
      value={20}
      min={0}
      max={80}
      onChange={onChange.bind(this)}
      label="Quantity"
      disabled
    />
  );
};
