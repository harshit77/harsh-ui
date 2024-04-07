import React from "react";
import Breadcrumb from "../../lib/components/Breadcrumb";
import { Menu } from "../../lib/icons";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  subcomponents: {
    "Breadcrumb.Item": Breadcrumb.Item,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { Breadcrumb } from "@harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item to="/">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Richard</Breadcrumb.Item>
    </Breadcrumb>
  );
};

Default.argTypes = Breadcrumb.props;

export const BreadcrumbWithCustomItem = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item to="/">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item to="VW-RCH01">
        Richard
        <span style={{ color: "#A8A8A8", paddingLeft: 2 }}>(Bear)</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Richard<span style={{ color: "#A8A8A8", paddingLeft: 2 }}>(Lewis)</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export const BreadcrumbWithCustomSeparator = () => {
  return (
    <Breadcrumb separator="/">
      <Breadcrumb.Item to="/">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item to="VW-RCH01">
        Richard
        <span style={{ color: "#A8A8A8", paddingLeft: 2 }}>(Bear)</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Richard<span style={{ color: "#A8A8A8", paddingLeft: 2 }}>(Lewis)</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export const BreadcrumbWithIcon = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item to="/">
        <Menu />
      </Breadcrumb.Item>
      <Breadcrumb.Item to="VW-RCH01">
        Richard
        <span style={{ color: "#A8A8A8", paddingLeft: 2 }}>(Bear)</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        Richard<span style={{ color: "#A8A8A8", paddingLeft: 2 }}>(Lewis)</span>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
