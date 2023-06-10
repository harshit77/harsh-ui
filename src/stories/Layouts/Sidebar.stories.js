import React from "react";
import Sidebar from "../../lib/components/Sidebar";
import {
  GridView,
  PeopleAlt,
  BuildFilledOff,
  DescriptionFilledNo,
  PaidFilledOff,
  DnsFilledOff,
  BarChart,
  AdminPanelSettingsFilledOff,
  C3Logo,
} from "../../lib/icons";

const SIDEBAR_CONTENT = [
  {
    path: "/",
    title: "Dashboards",
    type: "sub",
    hide: true,
    icontype: <GridView />,
    collapse: "dashboard",
    children: [
      {
        path: "datacenter-list",
        title: "Service Provider",
      },
      {
        path: "dashboard",
        title: "Customer",
      },
    ],
  },
  {
    path: "/customer",
    title: "Support",
    type: "sub",
    hide: true,
    icontype: <PeopleAlt />,
    collapse: "customer",
    children: [
      {
        path: "tickets",
        title: "Service Requests",
      },
      {
        path: "scheduled-jobs",
        title: "Scheduled Maintenance",
      },
      {
        path: "message",
        title: "Messages",
      },
      {
        path: "order/customer-ui/customer-pcdvc-list",
        title: "Customer Build",
        isAbsoluteURL: true,
      },
    ],
  },
  {
    path: "/appliances",
    title: "Build",
    type: "sub",
    hide: true,
    icontype: <BuildFilledOff />,
    collapse: "appliances",
    children: [
      {
        path: "provision-request",
        title: "Provisioning Requests",
      },
      {
        path: "job",
        title: "Tasks",
      },
    ],
  },
  {
    path: "/quote-management",
    title: "Order",
    type: "sub",
    hide: true,
    icontype: <DescriptionFilledNo />,
    collapse: "quote-management",
    children: [
      {
        path: "quote",
        title: "Quotes",
      },
      {
        path: "quoteStepper",
        title: "Quotes Wizard",
      },
      {
        path: "products",
        title: "Products",
      },
    ],
  },
  {
    path: "/finance",
    title: "Finance",
    type: "sub",
    hide: true,
    icontype: <PaidFilledOff />,
    collapse: "finance",
    children: [
      {
        path: "customercontract",
        title: "Contracts",
      },
      {
        path: "usage",
        title: "Usage",
      },
      {
        path: "legacycontract",
        title: "Legacy Contract",
      },
      {
        path: "bulkupload",
        title: "Bulk Upload",
      },
    ],
  },
  {
    path: "/infrastructure",
    title: "Infrastructure",
    type: "sub",
    hide: true,
    icontype: <DnsFilledOff />,
    collapse: "infrastructure",
    children: [
      {
        path: "appliances",
        title: "Appliances",
      },
      {
        path: "manage-datacenter",
        title: "Data Centers",
      },
      {
        path: "pod-management-tiles",
        title: "POD Management",
      },
    ],
  },
  {
    path: "/reports",
    title: "Reports",
    type: "link",
    hide: true,
    icontype: <BarChart />,
    children: [
      {
        path: "vspp-reports",
        title: "VSPP Reports",
      },
      {
        path: "connection-server",
        title: "Connection Server",
      },
    ],
  },
  {
    path: "/administration",
    title: "Adminstration",
    type: "sub",
    hide: true,
    icontype: <AdminPanelSettingsFilledOff />,
    collapse: "administration",
    children: [
      {
        path: "system-control-panel-tiles",
        title: "System Control Panel",
      },
      {
        path: "administration-tiles",
        title: "Tenant Control Panel",
      },
    ],
  },
];

export default {
  title: "Layouts/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: '`import { Sidebar } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = () => {
  const onSelection = (menu, subMenu) => console.log(menu, subMenu);
  return (
    <Sidebar
      sidebarMenu={SIDEBAR_CONTENT}
      logo={C3Logo}
      onSelection={onSelection}
    />
  );
};

export const SidebarCurrentNav = () => {
  const onSelection = (menu, subMenu) => console.log(menu, subMenu);
  return (
    <Sidebar
      sidebarMenu={SIDEBAR_CONTENT}
      logo={C3Logo}
      currentNavIndex={{ menuIndex: 1, subMenuIndex: 1 }}
      onSelection={onSelection}
    />
  );
};
