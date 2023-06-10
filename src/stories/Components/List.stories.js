import React, { useState } from "react";
import { List, Modal, Typography } from "../../lib/components";
import ListItemText from "../../lib/components/List/ListItemText";
import { Refresh } from "../../lib/icons";

export default {
  title: "Components/List",
  component: List,
  parameters: {
    docs: {
      description: {
        component: '`import { List } from "harsh-ui/index"`',
      },
    },
  },
};

const LIST_TEXT = ["Total Public IPs available", "Total VLANs available"];

export const Default = () => {
  return (
    <List headerText="Server Status">
      {LIST_TEXT.map((text, index) => (
        <List.ListItem key={index} text={text} />
      ))}
    </List>
  );
};

const LIST_VALUES = [
  { type: "info", name: "Total Public IPs available" },
  { type: "error", name: "Total VLANs available" },
];

Default.argTypes = List.props;

export const ListWithCircle = () => {
  return (
    <List headerText="Server Status">
      {LIST_VALUES.map((list, index) => (
        <List.ListItem key={index} text={list.name} circles={[list]} />
      ))}
    </List>
  );
};

const SERVICE_STATUS = [
  {
    key: "Connection Server",
    value: [
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
    ],
  },
  {
    key: "Gateway Server",
    value: [{ type: "info", name: "DZ997C-USVR02.vsep13.vdi" }],
  },
  {
    key: "Event Database",
    value: [{ type: "info", name: "Event Database Not Found" }],
  },
];

export const ListWithMoreOptions = () => {
  const [showModalMedium, setShowModalMedium] = useState(false);
  return (
    <>
      <List headerText="Server Status">
        {SERVICE_STATUS.map((status) => (
          <List.ListItem
            key={status.key}
            circles={status.value}
            text={status.key}
            onMoreClick={(e) => setShowModalMedium((preModal) => !preModal)}
          />
        ))}
      </List>
      <Modal
        isOpen={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="md"
      >
        <Modal.Header>
          <Typography component="body1">Connection Servers</Typography>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {SERVICE_STATUS[0].value.map((status) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  padding: 4,
                  background: "rgb(var(--harsh-ui-surface-bg-100))",
                  borderRadius: 4,
                }}
              >
                <List.ListInfoCircle type={status.type} />
                <List.ListItemText text={status.name} />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const SERVICE_STATUS_WITH_ICONS = [
  {
    key: "Connection Server",
    value: [
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
      { type: "info", name: "DZ997C-CSVR01.vsep13.vdi" },
    ],
  },
  {
    key: "Gateway Server",
    value: [{ type: "info", name: "DZ997C-USVR02.vsep13.vdi" }],
  },
  {
    key: "Event Database",
    value: [{ type: "info", name: "Event Database Not Found" }],
  },
];

export const ListWithMulitpleCircleWithIcon = () => {
  return (
    <List
      headerText="Server Status"
      headerIcon={
        <div
          style={{
            backgroundColor: "rgba(3, 234, 173, 0.1)",
            padding: 4,
            borderRadius: 999,
          }}
        >
          <Refresh
            width={16}
            height={16}
            style={{ color: "rgba(3, 234, 173, 1)" }}
          />
        </div>
      }
    >
      {SERVICE_STATUS_WITH_ICONS.map((status) => (
        <List.ListItem
          key={status.key}
          maxCircleLimit={4}
          circles={status.value}
          text={status.key}
        />
      ))}
    </List>
  );
};
