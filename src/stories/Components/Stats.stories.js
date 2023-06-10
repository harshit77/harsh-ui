import React from "react";
import Stats from "../../lib/components/Stats";

export default {
  title: "Components/Stats",
  component: Stats,
  parameters: {
    docs: {
      description: {
        component: '`import { Stats } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Stats {...args} />;

export const Default = () => {
  return (
    <div style={{ width: 100 }}>
      <Stats label="PODs" countProps={{ value: "03" }} />
    </div>
  );
};

export const DefaultWithLink = () => {
  return (
    <div style={{ width: 100 }}>
      <Stats label="PODs" countProps={{ value: "03" }} to="/" />
    </div>
  );
};

export const MultipleHorizontalItem = () => {
  return (
    <div
      style={{
        width: 250,
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        padding: 10,
        backgroundColor: "rgb(var(--harsh-ui-dark-90))",
      }}
    >
      <Stats label="PODs" countProps={{ value: "03" }} />
      <Stats label="Customer" countProps={{ value: "04" }} />
      <Stats label="Server" countProps={{ value: "04" }} />
      <Stats label="Server" countProps={{ value: "04" }} />
    </div>
  );
};

export const StatsVertical = () => {
  return (
    <div style={{ width: 100 }}>
      <Stats
        label="Servers"
        countProps={{ value: "04" }}
        variant="vertical-rounded-circle"
      />
    </div>
  );
};

StatsVertical.storyName = "Stats with vertical layout  and rounded circle";

export const StatsVerticalWithNoRoundedCircle = () => {
  return (
    <div style={{ width: 100 }}>
      <Stats
        label="Customers"
        countProps={{ value: "04" }}
        variant="vertical"
      />
    </div>
  );
};

StatsVertical.storyName = "Stats with vertical layout  and rounded circle";

export const StatsVerticalWithLink = () => {
  return (
    <div style={{ width: 100 }}>
      <Stats
        label="Customers"
        countProps={{ value: "04" }}
        variant="vertical"
        to="/"
      />
    </div>
  );
};

StatsVertical.storyName = "Stats with vertical layout with link";
