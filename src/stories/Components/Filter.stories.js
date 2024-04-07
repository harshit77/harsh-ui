import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Input,
  Filter,
  Table,
  Modal,
  Button,
  Typography,
  Dropdown,
  Checkbox,
} from "../../lib/components";

import { FilterAlt, ArrowDown } from "../../lib/icons";
export default {
  title: "Components/Filter",
  component: Filter,
  parameters: {
    docs: {
      description: {
        component: '`import { Filter } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Filter {...args} />;

const FilteredData = {
  filterHeader: {
    id: "ipFilter",
    label: "Filter",
    saveLabel: "Save filter",
    clearLabel: "Clear filter",
    options: [],
    save: {
      onSave: () => console.log("Save"),
    },
    clear: {
      onClear: () => console.log("Save"),
    },
  },
  filterBody: [
    {
      render: ({ label, id }, filterFieldChange) => (
        <Input
          label={label}
          placeholder={label}
          id={id}
          horizontal
          onChange={filterFieldChange}
        />
      ),
      label: "IP ID",
      id: "ip_id",
    },
    {
      render: ({ label }) => (
        <Input label={label} placeholder={label} horizontal />
      ),
      label: "IP Net",
    },
    {
      render: ({ label }) => (
        <Input label={label} placeholder={label} horizontal />
      ),
      label: "CIDR",
    },
    {
      render: ({ label }) => (
        <Input label={label} placeholder={label} horizontal />
      ),
      label: "Gateway",
    },

    {
      render: ({ label }) => (
        <Input label={label} placeholder={label} horizontal />
      ),
      label: "Public VLAN",
    },

    {
      render: ({ label }) => (
        <Input label={label} placeholder={label} horizontal />
      ),
      label: "Subnet Mask",
    },
  ],
};

const COLUMN_DATA = [
  {
    dataIndex: "ip_id",
    title: "IP ID",
    width: 50,
    render: (params) => (
      <div style={{ textDecoration: "underline" }}>{params}</div>
    ),
  },
  {
    dataIndex: "ip_net",
    title: "IP Net",
    render: (params) => <div>{params}</div>,
    width: 150,
  },
  {
    dataIndex: "ci_dr",
    title: "CIDR",
    width: 150,
  },
  {
    dataIndex: "public_vlan",
    title: "Public VLAN",
    width: 150,
  },
  {
    dataIndex: "gateway",
    title: "GateWay",
    width: 150,
  },
  {
    dataIndex: "subnet_mask",
    title: "Subnet Mask",
    width: 150,
  },
];

const ROW_DATA = [
  {
    id: 1,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: 25,
    public_vlan: "VLAN187",
    gateway: "148.66.207.161",
    subnet_mask: "255.255.255.224",
  },
  {
    id: 2,
    ip_id: "216.250.135.32/27",
    ip_net: "216.250.135.32",
    ci_dr: 27,
    public_vlan: "VLAN187",
    gateway: "216.250.135.33",
    subnet_mask: "255.255.255.224",
  },
  {
    id: 3,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: 25,
    public_vlan: "VLAN187",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
];

export const Default = Template.bind({});
Default.args = {
  filteredData: FilteredData,
};

const { filterHeader, ...onlyFilterBody } = FilteredData;
export const FilterWithNoHeader = Template.bind({});
FilterWithNoHeader.args = {
  filteredData: onlyFilterBody,
};

export const TableWithFilter = () => {
  const [filteredKeys, setFilteredKeys] = useState(
    COLUMN_DATA.reduce(
      (acc, column) => ({ ...acc, [column.dataIndex]: "" }),
      {},
    ),
  );
  const [tableRowData, setTableRowData] = useState(ROW_DATA);

  const handleTableFilter = (e) => {
    const { id, value } = e.target;
    setFilteredKeys({ ...filteredKeys, [id]: value });
  };

  useEffect(() => {
    const filterKeys = Object.keys(filteredKeys);
    const filteredData = ROW_DATA.filter(function (eachObj) {
      return filterKeys.every(function (eachKey) {
        if (eachObj[eachKey].toString().includes(filteredKeys[eachKey])) {
          return true;
        }
        return false;
      });
    });

    const isFilteredEmpty = Object.values(filteredKeys).concat() === "";

    setTableRowData(
      filteredData.length === 0 && isFilteredEmpty ? ROW_DATA : filteredData,
    );
  }, [filteredKeys]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Filter
        filteredData={FilteredData}
        filterFieldChange={handleTableFilter}
      />
      <Table
        columnData={COLUMN_DATA}
        rowData={tableRowData}
        id="FilterWithTable"
        pagination={{
          totalCount: tableRowData.length,
          currentPageNumber: 1,
          defaultPageSize: 15,
        }}
      />
    </div>
  );
};

export const FilterWithSave = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Filter filteredData={FilteredData} onSave={() => setShowModal(true)} />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header>
          <Typography component="body3">Modal Header</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography component="body1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Button label="Cancel" variant="secondary" />
            <Button label="Save" />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const TableWithAdvanceOption = () => {
  const filteredList = useRef([]);
  const [currentFilter, setCurrentFilter] = useState(false);

  const [filteredOptions, setFilteredOptions] = useState({});
  const filteredDataWithAdvanceFilter = useMemo(() => {
    return {
      filterHeader: {
        id: "ipFilter",
        label: "Filter",
        saveLabel: "Save Filter",
        clearLabel: "Clear Filter",
        options: [
          { id: 1, label: "List1" },
          { id: 2, label: "List2" },
          { id: 3, label: "List3" },
          { id: 4, label: "List4" },
        ],
      },
      filterBody: [
        {
          currentFilter,
          render: ({ label, id, currentFilter }, filterFieldChange) => (
            <Input
              label={currentFilter}
              placeholder={label}
              id={id}
              horizontal
              onChange={filterFieldChange}
            />
          ),
          label: "IP ID",
          hide: false,
          id: "ip_id",
        },
        {
          render: ({ label }) => (
            <Input label={label} placeholder={label} horizontal />
          ),
          hide: false,
          label: "IP Net",
          id: "ip_net",
        },
        {
          render: ({ label }) => (
            <Input label={label} placeholder={label} horizontal />
          ),
          hide: true,
          label: "CIDR",
          id: "cidr",
        },
        {
          render: ({ label }) => (
            <Input label={label} placeholder={label} horizontal />
          ),
          label: "Gateway",
          id: "gateway",
          hide: true,
        },

        {
          render: ({ label }) => (
            <Input label={label} placeholder={label} horizontal />
          ),
          label: "Public VLAN",
          id: "public_vlan",
          hide: true,
        },

        {
          render: ({ label }) => (
            <Input label={label} placeholder={label} horizontal />
          ),
          label: "Subnet Mask",
          id: "subnet_mask",
          hide: true,
        },
        {
          render: ({ label }) => (
            <Dropdown
              buttonProps={{
                variant: "dropdownFilter",
                iconPosition: "left",
                icon: <FilterAlt />,
                suffixNode1: (
                  <Input
                    size="2"
                    disabled={true}
                    className={"suffixNode1-input"}
                    value="3"
                  />
                ),
                suffixNode2: <ArrowDown />,
              }}
              defaultValue={label}
              onCloseSelect={handleSelect}
            >
              <Dropdown.Menu>
                <Dropdown.MenuItem
                  id="gateway"
                  prefix={
                    filteredList.current.includes("gateway") ? (
                      <Checkbox>
                        <Checkbox.Item checked />
                      </Checkbox>
                    ) : (
                      <Checkbox>
                        <Checkbox.Item />
                      </Checkbox>
                    )
                  }
                >
                  GateWay
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  id="public_vlan"
                  prefix={
                    filteredList.current.includes("public_vlan") ? (
                      <Checkbox>
                        <Checkbox.Item checked />
                      </Checkbox>
                    ) : (
                      <Checkbox>
                        <Checkbox.Item />
                      </Checkbox>
                    )
                  }
                >
                  Public Vlan
                </Dropdown.MenuItem>
                <Dropdown.MenuItem
                  id="subnet_mask"
                  prefix={
                    filteredList.current.includes("subnet_mask") ? (
                      <Checkbox>
                        <Checkbox.Item checked />
                      </Checkbox>
                    ) : (
                      <Checkbox>
                        <Checkbox.Item />
                      </Checkbox>
                    )
                  }
                >
                  SubNet Mask
                </Dropdown.MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          ),
          hide: false,
          label: "Advanced Filter",
          id: "advance_filter",
        },
      ],
    };
  }, [filteredList, currentFilter]);

  useEffect(
    () =>
      setFilteredOptions({
        ...filteredDataWithAdvanceFilter,
        filterBody: filteredDataWithAdvanceFilter.filterBody.filter(
          (item) => !item.hide,
        ),
      }),
    [filteredDataWithAdvanceFilter],
  );

  const handleDropdown = (e, instance) => {
    instance.hide();
    console.log(e.target.id);
  };

  const handleSelect = ({ target: { id } }) => {
    const updatedList = filteredDataWithAdvanceFilter.filterBody.reduce(
      (acc, current) => {
        if (current.id === id) {
          if (current.hide) {
            filteredList.current = [...filteredList.current, id];
          } else {
            filteredList.current = filteredList.current.filter(
              (item) => id !== item,
            );
          }

          current.hide = !current.hide;
        }
        acc.push(current);
        return acc;
      },
      [],
    );
    setFilteredOptions({
      ...filteredOptions,
      filterBody: updatedList.filter((item) => !item.hide),
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Filter
        filteredData={filteredOptions}
        onFilterDropdown={handleDropdown}
      />
    </div>
  );
};

TableWithAdvanceOption.storyName = "Filter with Advance filter options";
