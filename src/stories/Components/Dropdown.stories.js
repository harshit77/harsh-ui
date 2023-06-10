import React, { useState, useRef } from "react";
import { Dropdown, Checkbox, Tag, Input } from "../../lib/components";

import { CheckboxChecked, DeleteFilledOn, Edit } from "../../lib/icons";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  subcomponents: {
    "Dropdown.Menu": Dropdown.Menu,
    "Dropdown.MenuItem": Dropdown.MenuItem,
    "Dropdown.Divider": Dropdown.Divider,
  },
  parameters: {
    docs: {
      description: {
        component: '`import { Dropdown } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = (args) => {
  const listItems = [
    { icon: <Edit width={16} height={16} />, value: "Edit" },
    { icon: <DeleteFilledOn width={16} height={16} />, value: "Delete" },
  ];
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        defaultValue="Data Center Type"
        buttonProps={{ variant: "dropdown" }}
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <Dropdown.MenuItem id={item.value}>
              <span style={{ marginRight: 8 }}>{item.icon}</span>
              {item.value}
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

Default.argTypes = Dropdown.prop;

export const DefaultWithLabel = (args) => {
  const listItems = ["Edit", "Dizzion", "Delete"];
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        defaultValue="Dizzion"
        label="Data Center Type *"
        buttonProps={{ variant: "dropdown" }}
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <React.Fragment key={item}>
              <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
              {index !== listItems.length - 1 && <Dropdown.Divider />}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const DefaultWithSecondary = (args) => {
  const listItems = ["Edit", "Dizzion", "Delete"];
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        defaultValue="Dizzion"
        variant="secondary"
        label="Data Center Type *"
        buttonProps={{ variant: "dropdown" }}
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <React.Fragment key={item}>
              <Dropdown.MenuItem id={item} selected={index === 0}>
                {item}
              </Dropdown.MenuItem>
              {index !== listItems.length - 1 && <Dropdown.Divider />}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const Error = (args) => {
  const listItems = ["Edit", "Dizzion", "Delete"];
  const [error, setError] = useState("Please select the option");
  const [selectedOption, setSelectedOption] = useState("");

  const handleOnCloseSelect = (e, instance) => {
    if (e.target.id) {
      setSelectedOption(e.target.id);
      setError("");
    }
    instance.hide();
  };
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        defaultValue={selectedOption || "Select Type"}
        label="Data Center Type *"
        buttonProps={{ variant: "dropdown" }}
        error={error}
        onCloseSelect={handleOnCloseSelect}
      >
        <Dropdown.Menu>
          {listItems.map((item) => (
            <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const Disabled = (args) => {
  const listItems = [
    { icon: <Edit width={16} height={16} />, value: "Edit" },
    { icon: <DeleteFilledOn width={16} height={16} />, value: "Delete" },
  ];
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        disabled
        defaultValue="Data Center Type"
        buttonProps={{ variant: "dropdown" }}
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <Dropdown.MenuItem id={item.value}>
              <span style={{ marginRight: 8 }}>{item.icon}</span>
              {item.value}
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const DefaultWithHorizontalLabel = (args) => {
  const listItems = ["Edit", "Dizzion", "Delete"];
  return (
    <div style={{ width: 400 }}>
      <Dropdown
        defaultValue="Dizzion"
        label="Data Center Type *"
        buttonProps={{ variant: "dropdown" }}
        horizontal
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <React.Fragment key={item}>
              <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
              {index !== listItems.length - 1 && <Dropdown.Divider />}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const DropdownWithTextVariant = (args) => {
  const listItems = ["Edit", "Update", "Delete"];
  return (
    <div style={{ width: 200 }}>
      <Dropdown defaultValue="Dizzion" buttonProps={{ variant: "text" }}>
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <React.Fragment key={item}>
              <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
              {index !== listItems.length - 1 && <Dropdown.Divider />}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const ActionDropdown = (args) => {
  const listItems = ["Close incident", "Update converstion customer"];
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        defaultValue="Action"
        buttonProps={{ variant: "dropdownAction" }}
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const DropdownWithCustomItemWidth = (args) => {
  const listItems = ["Edit", "Dizzion", "Delete"];
  return (
    <div style={{ width: 200 }}>
      <Dropdown
        fullWidth={false}
        defaultValue="Dizzion"
        buttonProps={{ variant: "dropdown" }}
      >
        <Dropdown.Menu>
          {listItems.map((item, index) => (
            <React.Fragment key={item}>
              <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
              {index !== listItems.length - 1 && <Dropdown.Divider />}
            </React.Fragment>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const DropdownWithPrefixAndSuffix = (args) => {
  const listItems = ["Edit", "Update", "Delete"];

  const handleCloseSelect = (e, instance) => {
    instance.hide();
  };
  return (
    <div style={{ width: 200 }}>
      <Dropdown defaultValue="Dropdown" onCloseSelect={handleCloseSelect}>
        <Dropdown.Menu>
          {listItems.map((item) => (
            <Dropdown.MenuItem
              prefix={<CheckboxChecked />}
              suffix={<DeleteFilledOn />}
            >
              {item}
            </Dropdown.MenuItem>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

DropdownWithPrefixAndSuffix.storyName = "Dropdown with prefix and suffix props";

export const DropdownWithSearch = (args) => {
  const [listItems, setListItems] = useState([
    { id: 1, value: "28000-VW9" },
    { id: 2, value: "29000-VW10" },
    { id: 3, value: "10000-VW0" },
    { id: 4, value: "21000-VW6" },
    { id: 5, value: "25000-VW6" },
    { id: 6, value: "24000-VW1" },
    { id: 7, value: "26000-VW2" },
  ]);
  const initialListItems = useRef(listItems);
  const [checkedValues, setCheckedValues] = useState([]);
  const maxTag = 1;

  const handleSearchChanges = (e) => {
    e.target.value
      ? setListItems((prevItems) => [
          ...initialListItems.current.filter((item) =>
            item?.value.toLowerCase().includes(e.target.value.toLowerCase())
          ),
        ])
      : setListItems([...initialListItems.current]);
  };

  const handleCheck = ({ target: { id } }) => {
    const selectedId = Number(id);
    const selectedCheckboxes = checkedValues;
    const findIdx = selectedCheckboxes.indexOf(selectedId);
    if (findIdx > -1) {
      selectedCheckboxes.splice(findIdx, 1);
    } else {
      selectedCheckboxes.push(selectedId);
    }
    setListItems([...initialListItems.current]);
    setCheckedValues([...selectedCheckboxes]);
  };

  const getTagUI = (tagscount) => {
    if (tagscount.length !== 0) {
      const extraTags = tagscount.length - maxTag;
      const maxTagList = initialListItems.current
        .filter((list) => checkedValues?.includes(list.id))
        .slice(0, maxTag)
        .map((item) => (
          <Tag
            variant="secondary"
            onClose={(e) => {
              e.stopPropagation();
              checkedValues.shift();
              setCheckedValues([...checkedValues]);
            }}
          >
            {item.value}
          </Tag>
        ));
      if (extraTags > 0) {
        maxTagList.push(<Tag variant="secondary">{extraTags} +</Tag>);
      }
      return <>{maxTagList}</>;
    }
    return "Data Center";
  };

  return (
    <div style={{ width: 260 }}>
      <Dropdown
        defaultValue={getTagUI(checkedValues)}
        buttonProps={{ variant: "dropdown" }}
        onCloseSelect={(e, instance) => instance.hide()}
        searchProps={{
          values: [],
          onChange: handleSearchChanges,
        }}
      >
        <Dropdown.Menu>
          {listItems.length ? (
            listItems.map((item, index) => (
              <Dropdown.MenuItem key={index}>
                <Checkbox onChange={handleCheck}>
                  <Checkbox.Item
                    label={item.value}
                    id={item.id}
                    checked={checkedValues.includes(item.id)}
                  />
                </Checkbox>
              </Dropdown.MenuItem>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Not Found
            </div>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const AutoComplete = (args) => {
  const searchAbleData = [
    "Close incident",
    "Update converstion customer",
    "Data File Technologies",
    "Dec 13",
    "Davin",
    "POD",
    "Saint Louis University",
  ];
  const [value, setValue] = useState("");
  const [listItems, setListItem] = useState([]);

  const handleSearchChanges = ({ target: { value } }) => {
    value = value.trim();

    const filtered = searchAbleData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setListItem(filtered.length && value !== "" ? [...filtered] : []);
    setValue(value);
  };

  const handleSelect = (e, instance) => {
    instance.hide();
    e.target.id !== "" && setValue(e.target.id);
  };

  return (
    <div style={{ width: 250 }}>
      <Dropdown
        defaultValue="Action"
        variant="secondary"
        customTarget={
          <Input
            value={value}
            search
            onChange={handleSearchChanges}
            placeholder="Search Input"
          />
        }
        onCloseSelect={handleSelect}
      >
        {listItems.length > 0 && (
          <Dropdown.Menu>
            {listItems.map((item, index) => (
              <Dropdown.MenuItem id={item}>{item}</Dropdown.MenuItem>
            ))}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
};
