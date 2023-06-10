import React from "react";
import Sidebar from "../../lib/components/Sidebar";
import {
  GridView,
  PeopleAlt,
  BuildFilledOff,
  PaidFilledOff,
  AdminPanelSettingsFilledOff,
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
        path: "service",
        title: "Service",
      },
      {
        path: "events",
        title: "Events",
      },
    ],
  },
  {
    path: "/education",
    title: "Education",
    type: "sub",
    hide: true,
    icontype: <PeopleAlt />,
    collapse: "customer",
    children: [
      {
        path: "Primary",
        title: "Primary",
      },
      {
        path: "secondary",
        title: "Secondary",
      },
    ],
  },
  {
    path: "/resources",
    title: "Resources",
    type: "sub",
    hide: true,
    icontype: <BuildFilledOff />,
    collapse: "appliances",
    children: [
      {
        path: "genetics",
        title: "Genetics",
      },
      {
        path: "events",
        title: "Events",
      },
    ],
  },
  {
    path: "/settings",
    title: "Settings",
    type: "sub",
    hide: true,
    icontype: <AdminPanelSettingsFilledOff />,
    collapse: "administration",
    children: [
      {
        path: "general",
        title: "General",
      },
      {
        path: "advance",
        title: "Advance",
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
      logo={PaidFilledOff}
      onSelection={onSelection}
    />
  );
};

export const SidebarCurrentNav = () => {
  const onSelection = (menu, subMenu) => console.log(menu, subMenu);
  return (
    <Sidebar
      sidebarMenu={SIDEBAR_CONTENT}
      logo={PaidFilledOff}
      currentNavIndex={{ menuIndex: 1, subMenuIndex: 1 }}
      onSelection={onSelection}
    />
  );
};
