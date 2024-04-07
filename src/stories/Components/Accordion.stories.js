import React, { useState } from "react";
import {
  Accordion,
  Dropdown,
  Input,
  Avatar,
  Stats,
  Typography,
  List,
} from "../../lib/components";

import { Edit, DeleteFilledOn } from "../../../icons";

export default {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: '`import { Accordion } from "@harsh-ui/index"`',
      },
    },
  },
};

const CUSTOM_DATA = [
  {
    title: "Details",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius ligula ex, at egestas risus semper et. Aenean magna nisl, hendrerit vel commodo tristique, egestas vel nisi. Nullam et suscipit eros, sit amet malesuada felis. In nec dapibus sapien. Aenean dapibus augue a risus mollis mollis sit amet eu lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales erat vel nibh malesuada venenatis. Pellentesque ac odio mattis, pellentesque leo a, efficitur diam. Pellentesque tincidunt malesuada urna, a eleifend quam cursus in. Nullam pharetra bibendum varius.",
  },
  {
    title: "Summary",
    content:
      "Nam maximus pellentesque libero. Aliquam posuere massa diam, a pretium ex vehicula eu. Phasellus ante urna, vulputate eget scelerisque vel, tempus eu mauris. Maecenas lacinia.",
  },
  {
    title: "Configuration",
    content:
      "Sed porta consequat nisi vel aliquam. Vestibulum posuere erat in diam tempus, nec sodales libero tincidunt. Pellentesque placerat erat quis magna iaculis commodo id ac.",
  },
  {
    title: "Address",
    content:
      "Aliquam et risus ac enim malesuada mattis quis eu quam. Morbi eu dictum dolor. Cras ex lorem, pharetra tempor ullamcorper at, viverra sit amet ipsum.",
  },
];

const CUSTOM_DATA_INPUT = [
  {
    title: "Detail",
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          justifyContent: "space-evenly",
          backgroundColor: "rgba(38, 38, 38, 1)",
          padding: 20,
        }}
      >
        <Dropdown
          defaultValue="Harsh UI"
          label="Type *"
          buttonProps={{ variant: "dropdown" }}
          onCloseSelect={(e) => console.log(e.target.id)}
        >
          <Dropdown.Menu>
            <Dropdown.MenuItem id={1}>Edit</Dropdown.MenuItem>
            <Dropdown.MenuItem id={2}>Delete</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
        <Input
          label="Name"
          placeholder="name"
          value="DEN03"
        />
        <Input
          label="ID"
          placeholder="ID"
          value="United States"
        />
        <Input
          label="URL*"
          placeholder="URL"
          value="https://supportcenter.google.com..."
        />
      </div>
    ),
  },
  {
    title: "Configuration",
    content:
      "Sed porta consequat nisi vel aliquam. Vestibulum posuere erat in diam tempus, nec sodales libero tincidunt. Pellentesque placerat erat quis magna iaculis commodo id ac.",
  },
  {
    title: "Address",
    content:
      "Aliquam et risus ac enim malesuada mattis quis eu quam. Morbi eu dictum dolor. Cras ex lorem, pharetra tempor ullamcorper at, viverra sit amet ipsum.",
  },
];

const CUSTOM_DATA_CARDS = [
  {
    title: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Avatar size="medium" user={{ name: "VW" }} />
          <Typography component="h4" weight="medium">
            ACME
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Stats
              label="PCVDCs"
              countProps={{ value: "04" }}
              variant="vertical"
              to="/"
            />
            <Stats
              label="Desktop Pool"
              countProps={{ value: "00" }}
              variant="vertical"
              to="/"
            />
            <Stats
              label="Desktop"
              countProps={{ value: "21" }}
              variant="vertical"
              to="/"
            />
          </div>
          <List headerText="Server Status">
            <List.ListItem>
              <List.ListInfoCircle type="info" />
              <List.ListItemText primary="Total Public IPs available" />
            </List.ListItem>
            <List.ListItem>
              <List.ListInfoCircle type="error" />
              <List.ListItemText primary="Total VLANs available " />
            </List.ListItem>
          </List>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
            }}
          >
            <Stats
              label="Servers"
              countProps={{ value: "04" }}
              variant="vertical-rounded-circle"
            />
          </div>
        </div>
      </div>
    ),
    content: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          justifyContent: "space-evenly",
          backgroundColor: "rgba(38, 38, 38, 1)",
          padding: 20,
        }}
      >
        <Dropdown
          defaultValue="HarshUI"
          label="Data Center Type *"
          buttonProps={{ variant: "dropdown" }}
          onCloseSelect={(e) => console.log(e.target.id)}
        >
          <Dropdown.Menu>
            <Dropdown.MenuItem id={1}>Edit</Dropdown.MenuItem>
            <Dropdown.MenuItem id={2}>Delete</Dropdown.MenuItem>
          </Dropdown.Menu>
        </Dropdown>
        <Input
          label="Name"
          placeholder="name"
          value="DEN03"
        />
        <Input
          label="ID"
          placeholder="ID"
          value="United States"
        />
        <Input
          label="URL*"
          placeholder="URL"
          value="https://supportcenter.goggle.com..."
        />
      </div>
    ),
  },
];

const ACTIONS = [
  {
    id: "edit",
    label: "Edit",
    icon: <Edit />,
  },
  {
    id: "delete",
    label: "Delete",
    icon: <DeleteFilledOn />,
  },
];

export const Default = () => {
  return (
    <>
      {CUSTOM_DATA.map((data, index) => (
        <Accordion expanded={index === 0}>
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>{data.content}</Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export const SecondaryVariant = () => {
  return (
    <>
      {CUSTOM_DATA.map((data, index) => (
        <Accordion variant="secondary" expanded={index === 0}>
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>{data.content}</Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export const Controlled = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) =>
    setExpanded(expanded === panel ? false : panel);

  return (
    <>
      {CUSTOM_DATA.map((data, index) => (
        <Accordion
          id={index + 1}
          expanded={index === expanded}
          onChange={handleChange.bind(this, index)}
        >
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>{data.content}</Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export const ControlledWithCustomInput = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) =>
    setExpanded(expanded === panel ? false : panel);
  return (
    <>
      {CUSTOM_DATA_INPUT.map((data, index) => (
        <Accordion
          id={index + 1}
          expanded={index === expanded}
          onChange={handleChange.bind(this, index)}
        >
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>{data.content}</Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export const ControlledWithCards = () => {
  const { AccordionItem, AccordionTitle } = Accordion;
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) =>
    setExpanded(expanded === panel ? false : panel);
  return (
    <>
      {CUSTOM_DATA_CARDS.map((data, index) => (
        <Accordion
          id={index + 1}
          className="accordion_cards_wrapper"
          expanded={index === expanded}
          onChange={handleChange.bind(this, index)}
          options={ACTIONS}
          onActionChange={(optionClicked, accordionId) =>
            alert(optionClicked + accordionId)
          }
        >
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>{data.content}</Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export const Disabled = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) =>
    setExpanded(expanded === panel ? false : panel);
  return (
    <>
      {CUSTOM_DATA_INPUT.map((data, index) => (
        <Accordion
          id={index + 1}
          disabled={index === 1}
          expanded={index === expanded}
          onChange={handleChange.bind(this, index)}
        >
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>{data.content}</Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};

export const Nested = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) =>
    setExpanded(expanded === panel ? false : panel);
  return (
    <>
      {CUSTOM_DATA_INPUT.map((data, index) => (
        <Accordion
          id={index + 1}
          className="accordion_cards_wrapper"
          expanded={index === expanded}
          onChange={handleChange.bind(this, index)}
          options={ACTIONS}
          onActionChange={(optionClicked, accordionId) =>
            alert(optionClicked + accordionId)
          }
        >
          <Accordion.AccordionTitle>{data.title}</Accordion.AccordionTitle>
          <Accordion.AccordionItem>
            <Accordion id="nested">
              <Accordion.AccordionTitle>Nested Title</Accordion.AccordionTitle>
              <Accordion.AccordionItem>Nested Item</Accordion.AccordionItem>
            </Accordion>
            <Accordion>
              <Accordion.AccordionTitle>Nested Title2</Accordion.AccordionTitle>
              <Accordion.AccordionItem>Nested Item2</Accordion.AccordionItem>
            </Accordion>
          </Accordion.AccordionItem>
        </Accordion>
      ))}
    </>
  );
};
