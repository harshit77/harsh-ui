import React, { useState } from "react";
import { Card, Typography } from "../../lib/components";
import { ManagedDaas, Dass } from "../../lib/icons";

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    docs: {
      desciption: {
        component: '`import { Card } from "harsh-ui/index"`',
      },
    },
  },
};
const DATA_CENTER = ["IBMDAL10", "IBMDAL02", "IBMDAL06"];

const MEDIA_CARDS = [
  { icon: <Dass />, title: "DaaS" },
  { icon: <ManagedDaas />, title: "Managed DaaS" },
];

const PRIMARY_CARDS = [
  "Germany",
  "Japan",
  "Singapore",
  "United Kingdom",
  "United States",
];

const SECONDARY_CARDS = [
  {
    title: "New",
    description: "Standard pricing metered by the month",
  },
  {
    title: "Add-On",
    description: "Discount offered based on contract length",
  },

  {
    title: "Renewal",
    description: "Standard pricing metered by the month",
  },

  {
    title: "Upgrade",
    description: "Standard pricing metered by the month",
  },
  {
    title: "Downgrade",
    description: "Standard pricing metered by the month",
  },
];

export const Default = (args) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCard = (index, e) => setSelectedCard(index);
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {PRIMARY_CARDS.map((card, index) => (
        <Card
          title={card}
          selected={index === selectedCard}
          description={card.description}
          onClick={handleCard.bind(this, index)}
        />
      ))}
    </div>
  );
};

export const RadioCard = (args) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCard = (index, e) => setSelectedCard(index);
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {DATA_CENTER.map((card, index) => (
        <Card
          title={card}
          variant="radio"
          selected={index === selectedCard}
          description={card.description}
          onClick={handleCard.bind(this, index)}
          disabled
        />
      ))}
    </div>
  );
};

export const SecondaryType = (args) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCard = (index, e) => setSelectedCard(index);
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {SECONDARY_CARDS.map((card, index) => (
        <Card
          {...args}
          title={card.title}
          variant="secondary"
          selected={index === selectedCard}
          description={card.description}
          onClick={handleCard.bind(this, index)}
        />
      ))}
    </div>
  );
};

export const MediaType = (args) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const handleCard = (index, e) => setSelectedCard(index);
  return (
    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
      {MEDIA_CARDS.map((card, index) => (
        <Card
          title={card.title}
          icon={card.icon}
          variant="media"
          selected={index === selectedCard}
          onClick={handleCard.bind(this, index)}
        />
      ))}
    </div>
  );
};

export const SecondaryCardVariants = (args) => {
  const [selectedCard, setSelectedCard] = useState(1);
  const [selectedSmallCard, setSelectedSmallCard] = useState(3);
  const handleCard = (index, e) => setSelectedCard(index);
  const handleSmallCard = (index, e) => setSelectedSmallCard(index);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        color: "white",
      }}
    >
      <Typography component="body1">Card-Medium(Default)</Typography>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {SECONDARY_CARDS.map((card, index) => (
          <Card
            title={card.title}
            variant="secondary"
            selected={index === selectedCard}
            description={card.description}
            onClick={handleCard.bind(this, index)}
          />
        ))}
      </div>
      <Typography component="body1">Card-Small</Typography>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {SECONDARY_CARDS.map((card, index) => (
          <Card
            type="small"
            variant="secondary"
            title={card.title}
            selected={index === selectedSmallCard}
            description={card.description}
            onClick={handleSmallCard.bind(this, index)}
          />
        ))}
      </div>
      <Typography component="body1">Card-Xsmall</Typography>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {SECONDARY_CARDS.map((card, index) => (
          <Card
            type="xsmall"
            variant="secondary"
            title={card.title}
            selected={index === selectedSmallCard}
            description={card.description}
            onClick={handleSmallCard.bind(this, index)}
          />
        ))}
      </div>
    </div>
  );
};
