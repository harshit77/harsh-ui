import React, { useState } from "react";
import { ButtonFilter, Typography } from "../../lib/components";

export default {
  title: "Components/ButtonFilter",
  component: ButtonFilter,
  subcomponents: {
    "ButtonFilter.Item": ButtonFilter.Item,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { ButtonFilter } from "harsh-ui/index"`',
      },
    },
  },
};

const FILTER_DATA = [
  {
    id: 1,
    value: "All services Request",
  },
  {
    id: 2,
    value: "Service requests I submitted",
  },
  {
    id: 3,
    value: "Customer has updated",
  },
  {
    id: 4,
    value: "Support has updated",
  },
  {
    id: 5,
    value: "Customer Experience",
  },
  {
    id: 6,
    value: "Customer Portal",
  },
  {
    id: 7,
    value: "Provisioning",
  },
  {
    id: 8,
    value: "Change Management",
  },
  {
    id: 9,
    value: "Client Relations",
  },
  {
    id: 10,
    value: "Platform",
  },
];

export const Default = (args) => {
  return (
    <ButtonFilter ids={[1]}>
      {FILTER_DATA.map((item) => (
        <ButtonFilter.Item key={item.id} id={item?.id}>
          {item.value}
        </ButtonFilter.Item>
      ))}
    </ButtonFilter>
  );
};

export const Controlled = (args) => {
  const [selectedValues, setSelectedValues] = useState([1]);

  const handleSelectedValues = ({ target: { id } }) => {
    const selectedId = Number(id);
    const findIdx = selectedValues.indexOf(selectedId);
    findIdx !== -1
      ? selectedValues.splice(findIdx, 1)
      : selectedValues.push(selectedId);
    setSelectedValues([...selectedValues]);
  };
  return (
    <ButtonFilter ids={selectedValues} onChange={handleSelectedValues}>
      {FILTER_DATA.map((item) => (
        <ButtonFilter.Item key={item.id} id={item?.id}>
          {item.value}
        </ButtonFilter.Item>
      ))}
    </ButtonFilter>
  );
};

export const MultiLine = (args) => {
  const [selectedValues, setSelectedValues] = useState([1]);

  const handleSelectedValues = ({ target: { id } }) => {
    const selectedId = Number(id);
    const findIdx = selectedValues.indexOf(selectedId);
    findIdx !== -1
      ? selectedValues.splice(findIdx, 1)
      : selectedValues.push(selectedId);
    setSelectedValues([...selectedValues]);
  };
  return (
    <div>
      <ButtonFilter
        ids={selectedValues}
        onChange={handleSelectedValues}
        multiLine
      >
        {FILTER_DATA.map((item) => (
          <ButtonFilter.Item key={item.id} id={item?.id}>
            {item.value}
          </ButtonFilter.Item>
        ))}
      </ButtonFilter>
      <Typography component="body3" style={{ color: "white", marginTop: 40 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Typography>
    </div>
  );
};

MultiLine.storyName = "MultiLine layout";
