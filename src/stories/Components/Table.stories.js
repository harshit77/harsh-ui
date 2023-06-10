import React, { useState } from "react";
import { Table, Dropdown, Checkbox, Button, Tag } from "../../lib/components";
import { ShoppingCart, MenuMoreVert } from "../../lib/icons";

export default {
  title: "Components/Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: '`import { Table } from "harsh-ui/index"`',
      },
    },
  },
};

const Template = (args) => <Table {...args} />;

const COLUMN_DATA = [
  {
    dataIndex: "ip_id",
    title: "IP ID",
    width: "80px",
    sorting: true,
    render: (row, selectedKey, handleActions, handleNestedClick) => {
      return (
        <div
          style={{ textDecoration: "underline" }}
          onClick={(e) => (handleNestedClick ? handleNestedClick(e, row) : {})}
        >
          {row}
        </div>
      );
    },
    renderColumn: (column, handleColumnActions) => {
      return <div>{column}</div>;
    },
  },
  {
    dataIndex: "ip_net",
    title: "IP Net",
    sorting: true,
    render: (params) => <div>{params}</div>,
    width: "150px",
  },
  {
    dataIndex: "ci_dr",
    title: "CIDR",
    sorting: true,
    width: "80px",
  },
  {
    dataIndex: "public_vlan",
    title: "Public VLAN",
    width: "180px",
  },
  {
    dataIndex: "gateway",
    title: "GateWay",
    sorting: true,
    width: "420px",
  },
  {
    dataIndex: "subnet_mask",
    title: "Subnet Mask",
    width: "180px",
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
    ci_dr: "11",
    public_vlan: "VLAN181",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 4,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "18",
    public_vlan: "VLAN189",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 5,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "21",
    public_vlan: "VLAN177",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 6,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "12",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
];

const EXTRA_ITEM_PAGINATION = [
  {
    id: 7,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "21",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 8,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.158",
    ci_dr: "22",
    public_vlan: "VLAN10",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 9,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.126",
    ci_dr: "23",
    public_vlan: "VLAN11",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 10,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "26",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 11,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "21",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 12,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "28",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 13,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.179",
    ci_dr: "24",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 14,
    ip_id: "148.66.207.150/27",
    ip_net: "148.66.207.120",
    ci_dr: "31",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 15,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "29",
    public_vlan: "VLAN17",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 16,
    ip_id: "148.66.207.160/27",
    ip_net: "148.66.207.160",
    ci_dr: "25",
    public_vlan: "VLAN10",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
  {
    id: 17,
    ip_id: "148.66.207.160/17",
    ip_net: "148.66.207.130",
    ci_dr: "32",
    public_vlan: "VLAN11",
    gateway: "216.87.88.129",
    subnet_mask: "255.255.255.192",
  },
];

const COLUMN_DATA_WITH_CHECKBOX = [
  {
    dataIndex: "ip_checkbox",
    title: "",
    width: "50px",
    render: (params, checked) => (
      <Checkbox>
        <Checkbox.Item value={params.id} checked={checked} />
      </Checkbox>
    ),
  },
  ...COLUMN_DATA,
];

const COLUMN_DATA_WITH_CLICKABLE_CHECKBOX = [
  {
    dataIndex: "",
    title: "",
    width: "50px",
    clickable: true,
    render: (params, checked, handleActions) => {
      return (
        <Checkbox
          onChange={(e) => {
            handleActions(e, params);
          }}
        >
          <Checkbox.Item
            value={params.id}
            id={params.id}
            checked={params.checked}
          />
        </Checkbox>
      );
    },
  },
  ...COLUMN_DATA,
];

const ROW_DATA_WITH_CHECKBOX = ROW_DATA.map((row) => ({
  ip_checkbox: "",
  ...row,
}));

const listItems = ["Edit", "Dizzion", "Delete"];

const COLUMN_DATA_WITH_DROPDOWN = [
  ...COLUMN_DATA,
  ,
  {
    dataIndex: "ip_actions",
    title: "",
    width: "120px",
    render: (row, selectedKey, handleActions) => {
      return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Dropdown
            buttonProps={{ variant: "text", icon: <MenuMoreVert /> }}
            dropdownProps={{ style: { width: 150 } }}
            onCloseSelect={(e, instance) => handleActions(e, instance, row)}
          >
            <Dropdown.Menu>
              {listItems.map((item, index) => (
                <Dropdown.MenuItem id={index}>{item}</Dropdown.MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    },
  },
];

const COLUMN_DATA_WITH_ACCORDION = [
  ...COLUMN_DATA,
  ,
  {
    dataIndex: "ip_actions",
    title: "",
    width: "80px",
    render: (row, selectedKey, handleActions) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: -25,
          }}
        >
          <Dropdown
            buttonProps={{ variant: "text", icon: <MenuMoreVert /> }}
            dropdownProps={{ style: { width: 150 } }}
            onCloseSelect={(e, instance) => {
              e.stopPropagation();
            }}
          >
            <Dropdown.Menu>
              {listItems.map((item, index) => (
                <Dropdown.MenuItem id={index}>{item}</Dropdown.MenuItem>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    },
  },
];

const ROW_DATA_WITH_DROPDOWN = ROW_DATA.map((row) => ({
  ip_actions: "",
  ...row,
}));

export const Default = (args) => {
  const [selectedColumn, setSelectedColumn] = useState({
    column: null,
    direction: true,
  });

  const handlePageCountChange = (e, instance) => {
    instance.hide();
  };

  return (
    <Table
      columnData={COLUMN_DATA}
      rowData={ROW_DATA}
      id="Defaults"
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
        onPageCountChange: handlePageCountChange,
      }}
      onSort={{
        currentSorting: selectedColumn?.column,
        direction: selectedColumn.direction,
        onSortChange: (sortedColumn) => setSelectedColumn(sortedColumn),
      }}
      onResizeEnd={(updatedWidths) => console.log(updatedWidths)}
    />
  );
};

export const TableWithSecondaryType = Template.bind({});
TableWithSecondaryType.args = {
  id: "TableWithSecondaryType",
  columnData: COLUMN_DATA,
  rowData: ROW_DATA,
  pagination: {
    totalCount: ROW_DATA?.length,
    currentPageNumber: 1,
    defaultPageSize: 15,
  },
  type: "secondary",
};

export const TableWithBorderedType = Template.bind({});
TableWithBorderedType.args = {
  id: "TableWithBorderedType",
  columnData: COLUMN_DATA,
  rowData: ROW_DATA,
  pagination: {
    totalCount: ROW_DATA?.length,
    currentPageNumber: 1,
    defaultPageSize: 15,
  },
  type: "bordered",
};

export const TableWithFixedHeight = () => {
  return (
    <Table
      columnData={COLUMN_DATA_WITH_DROPDOWN}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id={TableWithActions}
      fixedHeight
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
      }}
    />
  );
};

TableWithFixedHeight.storyName = "Table with Fixed Height as boolean ";

export const TableWithFixedHeightNumber = () => {
  return (
    <Table
      columnData={COLUMN_DATA_WITH_DROPDOWN}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id={TableWithActions}
      fixedHeight={200}
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
      }}
    />
  );
};

TableWithFixedHeight.storyName = "Table with Fixed Height as number ";

export const TableWithNoPagination = Template.bind({});
TableWithNoPagination.args = {
  id: "TableWithNoPagination",
  columnData: COLUMN_DATA,
  rowData: ROW_DATA,
  pagination: {},
};

TableWithNoPagination.storyName = "Table with no pagination";

export const TableWithPagination = (args) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(15);

  const handlePageCountChange = (e, instance) => {
    instance.hide();
    setPageCount(e.target.id);
  };

  return (
    <Table
      columnData={COLUMN_DATA_WITH_DROPDOWN}
      rowData={ROW_DATA_WITH_DROPDOWN.concat(EXTRA_ITEM_PAGINATION)}
      id="TableWithPagination"
      pagination={{
        totalCount: ROW_DATA.concat(EXTRA_ITEM_PAGINATION).length,
        currentPageNumber: currentPageNumber,
        defaultPageSize: pageCount,
        onPageChange: (page) => setCurrentPageNumber(page),
        onPageCountChange: handlePageCountChange,
      }}
    />
  );
};

TableWithPagination.storyName = "Table with pagination";

export const TableWithOnRowClick = Template.bind({});
TableWithOnRowClick.args = {
  columnData: COLUMN_DATA,
  rowData: ROW_DATA,
  pagination: {
    totalCount: ROW_DATA?.length,
    currentPageNumber: 1,
    defaultPageSize: 15,
  },
  id: "TableWithOnRowClick",
  onRowClick: (row) => {
    alert(`Row Clicked ${row.id}`);
  },
};

TableWithOnRowClick.storyName = "Table with on row click";

export const TableWithCheckBox = (args) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(15);
  const [selectedRowkeys, setSelectedRowKeys] = useState([]);

  const handleRowSelect = (row) => {
    const selectedId = row?.id;
    const findIndex = selectedRowkeys.indexOf(selectedId);
    if (findIndex > -1) {
      selectedRowkeys.splice(findIndex, 1);
    } else {
      selectedRowkeys.push(selectedId);
    }
    setSelectedRowKeys([...selectedRowkeys]);
  };

  const handlePageCountChange = (e, instance) => {
    instance.hide();
    setPageCount(e.target.id);
  };

  return (
    <>
      <Table
        columnData={COLUMN_DATA_WITH_CHECKBOX}
        rowData={ROW_DATA_WITH_CHECKBOX}
        id="TableWithCheckBox"
        selectedRowkeys={selectedRowkeys}
        onRowSelect={handleRowSelect}
        pagination={{
          totalCount: ROW_DATA?.length,
          currentPageNumber: currentPageNumber,
          defaultPageSize: pageCount,
          onPageChange: (page) => setCurrentPageNumber(page),
          onPageCountChange: handlePageCountChange,
        }}
      />
      <div style={{ marginTop: 20 }}>
        <Button
          label={`${selectedRowkeys.length} Item selected`}
          variant="secondary"
          size="medium"
          icon={<ShoppingCart />}
          iconPosition="left"
        />
      </div>
    </>
  );
};

TableWithCheckBox.storyName = "Table with checkbox";

export const TableWithActions = () => {
  const handleActions = (e, instance, row) => {
    instance.hide();
    console.log(e.target.id, row);
  };
  return (
    <Table
      columnData={COLUMN_DATA_WITH_DROPDOWN}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id={TableWithActions}
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
      }}
      handleActions={handleActions}
    />
  );
};

TableWithActions.storyName = "Table with actions";

export const TableWithSortedColumn = (args) => {
  const [selectedColumn, setSelectedColumn] = useState({
    column: null,
    direction: null,
  });

  const handleSelectedColumn = (sortedColumn) => {
    console.log(sortedColumn);
    setSelectedColumn({
      ...sortedColumn,
      direction:
        selectedColumn.column === sortedColumn.column
          ? sortedColumn.direction
          : true,
    });
  };

  return (
    <Table
      columnData={COLUMN_DATA}
      rowData={ROW_DATA}
      id="Defaults"
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
      }}
      onSort={{
        currentSorting: selectedColumn?.column,
        direction: selectedColumn.direction,
        onSortChange: handleSelectedColumn,
      }}
      onResizeEnd={(updatedWidths) => console.log(updatedWidths)}
    />
  );
};

export const NestedTable = (args) => {
  const nestedElement = (row, handleRowClick) => {
    return (
      <td
        colspan={COLUMN_DATA_WITH_ACCORDION.length - 1}
        onClick={handleRowClick.bind(this, row)}
      >
        <div>
          <Tag variant="primary">Dizzion Nested {row.id}</Tag>
        </div>
      </td>
    );
  };
  return (
    <Table
      type="nested"
      columnData={COLUMN_DATA_WITH_ACCORDION}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id="Defaults"
      nestedElement={nestedElement}
      pagination={{}}
    />
  );
};

export const CustomElement = (args) => {
  return (
    <Table
      columnData={COLUMN_DATA_WITH_ACCORDION}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id="Defaults"
      pagination={{
        customElement: () => <div>Dizzion</div>,
      }}
      resizer={false}
    />
  );
};
export const TableNoBorder = (args) => {
  return (
    <Table
      columnData={COLUMN_DATA_WITH_ACCORDION}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id="tableNoBorder"
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
      }}
      className="no-border"
      resizer={false}
    />
  );
};

export const TableWithRowAndColumClick = (args) => {
  const [rowData, setRowData] = useState(ROW_DATA_WITH_DROPDOWN);
  const handleActions = (e, selectedRow) => {
    const findIndex = rowData.findIndex((row) => selectedRow.id === row.id);
    rowData[findIndex].checked = !rowData[findIndex].checked;
    setRowData([...rowData]);
  };
  return (
    <Table
      columnData={COLUMN_DATA_WITH_CLICKABLE_CHECKBOX}
      rowData={ROW_DATA_WITH_DROPDOWN}
      id="tablewithrowandColumn"
      onRowClick={() => console.log("Row Clicked")}
      pagination={{
        totalCount: ROW_DATA?.length,
        currentPageNumber: 1,
        defaultPageSize: 15,
      }}
      className="no-border"
      resizer={false}
      handleActions={handleActions}
    />
  );
};
