import React, { useState } from "react";
import ColumnSelector from "../../lib/components/ColumnSelector";
import { Button } from "../../lib/components";

export default {
  title: "Components/ColumnSelector",
  component: ColumnSelector,
  parameters: {
    docs: {
      description: {
        component: '`import { ColumnSelector } from "harsh-ui/index"`',
      },
    },
  },
};

export const Default = () => {
  const [showColumnSelector, setColumnSelector] = useState(false);
  const [columnList, setColumnList] = useState([
    {
      dataIndex: "productName",
      title: "Product Name",
      showColumn: true,
    },
    {
      dataIndex: "measure",
      title: "Measure",
      showColumn: true,
    },
    {
      dataIndex: "quantity",
      title: "Quantity",
      showColumn: true,
    },
    {
      dataIndex: "startDateStr",
      title: "Start Date",
      showColumn: false,
    },
    {
      dataIndex: "endDateStr",
      title: "End Date",
      showColumn: false,
    },
    {
      dataIndex: "status",
      title: "status",
      showColumn: false,
    },
  ]);
  return (
    <>
      {showColumnSelector ? (
        <ColumnSelector
          heading="Hide Show Column"
          columnList={columnList}
          setColumnList={setColumnList}
          setColumnSelector={setColumnSelector}
          headerLabel="Column Name"
        />
      ) : (
        <Button
          size="medium"
          label="Column Selector"
          onClick={() => setColumnSelector(!showColumnSelector)}
        />
      )}
    </>
  );
};
