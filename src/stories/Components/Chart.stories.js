import React from "react";
import Chart from "../../lib/components/Chart";

import { Typography } from "../../lib/components";

export default {
  title: "Components/Chart",
  component: Chart,
  parameters: {
    docs: {
      description: {
        component: '`import { Chart } from "harsh-ui/index"`',
      },
    },
  },
};

const largeData = [
  { name: "PC-000001", x: 12, y: 23, z: 122 },
  { name: "PC-000002", x: 22, y: 3, z: 73 },
  { name: "PC-000003", x: 13, y: 15, z: 32 },
  { name: "PC-000004", x: 44, y: 35, z: 23 },
  { name: "PC-000005", x: 35, y: 45, z: 20 },
  { name: "PC-000006", x: 62, y: 25, z: 29 },
  { name: "PC-000007", x: 37, y: 17, z: 61 },
  { name: "PC-000008", x: 28, y: 32, z: 45 },
  { name: "PC-000009", x: 19, y: 43, z: 93 },
  { name: "PC-0000011", x: 12, y: 23, z: 122 },
  { name: "PC-0000012", x: 22, y: 3, z: 73 },
  { name: "PC-0000013", x: 13, y: 15, z: 32 },
  { name: "PC-0000014", x: 44, y: 35, z: 23 },
  { name: "PC-0000015", x: 35, y: 45, z: 20 },
  { name: "PC-0000016", x: 62, y: 25, z: 29 },
  { name: "PC-0000017", x: 37, y: 17, z: 61 },
  { name: "PC-0000018", x: 28, y: 32, z: 45 },
  { name: "PC-0000019", x: 19, y: 43, z: 93 },
];

const smallData = [
  {
    name: "PC-000001",
    x: 12,
    y: 23,
    z: 122,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000002",
    x: 22,
    y: 3,
    z: 73,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000003",
    x: 13,
    y: 15,
    z: 32,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000004",
    x: 44,
    y: 35,
    z: 23,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000005",
    x: 35,
    y: 0,
    z: 20,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000006",
    x: 62,
    y: 25,
    z: 29,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000007",
    x: 37,
    y: 17,
    z: 61,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000008",
    x: 28,
    y: 32,
    z: 45,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
  {
    name: "PC-000009",
    x: 19,
    y: 43,
    z: 93,
    a: 12,
    b: 23,
    c: 122,
    d: 12,
    e: 23,
    f: 122,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "rgba(39,39,39,0.7)",
          padding: 10,
          borderRadius: 10,
          width: "auto",
        }}
      >
        {payload.map((load) => {
          return (
            <p className="label">
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: load.stroke,
                }}
              ></div>
              {`${label} : ${load.value}`}
            </p>
          );
        })}
        <p className="desc">Tooltip</p>
      </div>
    );
  }

  return null;
};

export const Default = (args) => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Bar Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="bar" data={smallData} height={400} width={1000}>
          <Chart.CartesianGrid vertical={false} />
          <Chart.Tooltip wrapperStyle={{ backgroundColor: "black" }} />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Legend />
          <Chart.Bar dataKey="x" fill="#8884d8" />
          <Chart.Bar dataKey="y" fill="#82ca9d" />
          <Chart.Bar dataKey="z" fill="yellow" />
        </Chart>
      </div>

      <Typography component="h1">Stack Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="bar" data={smallData} height={400} width={1000}>
          <Chart.CartesianGrid vertical={false} />
          <Chart.Tooltip wrapperStyle={{ backgroundColor: "black" }} />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Legend />
          <Chart.Bar dataKey="x" fill="#8884d8" stackId="a" />
          <Chart.Bar dataKey="y" fill="#82ca9d" stackId="a" />
          <Chart.Bar dataKey="z" fill="yellow" stackId="a" />
        </Chart>
      </div>

      <Typography component="h1">Line Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="line" data={smallData} height={400} width={1000}>
          <Chart.CartesianGrid />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Tooltip />
          <Chart.Legend />
          <Chart.Line dataKey="x" stroke="#8884d8" />
          <Chart.Line dataKey="y" stroke="#82ca9d" />
          <Chart.Line dataKey="z" stroke="yellow" type="monotone" />
        </Chart>
      </div>

      <Typography component="h1">Area Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="linearea" data={smallData} height={400} width={1000}>
          <Chart.CartesianGrid />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Tooltip />
          <Chart.Legend />
          <Chart.Area
            dataKey="x"
            stroke="#8884d8"
            fill="#8884d8"
            type="monotone"
          />
          <Chart.Area dataKey="y" stroke="#82ca9d" fill="#82ca9d" />
        </Chart>
      </div>
    </div>
  );
};

export const ResponsiveChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Responsive Chart</Typography>
      <div style={{ ...wrapper, minWidth: "400" }}>
        <Chart type="bar" data={smallData} responsive={true}>
          <Chart.CartesianGrid vertical={false} />
          <Chart.Tooltip wrapperStyle={{ backgroundColor: "black" }} />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Legend iconType="circle" />
          <Chart.Bar dataKey="x" fill="#8884d8" />
          <Chart.Bar dataKey="y" fill="#82ca9d" />
          <Chart.Bar dataKey="z" fill="yellow" />
        </Chart>
      </div>
    </div>
  );
};

export const VerticalLabelChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 10,
    width: "100%",
    minWidth: 500,
    height: 400,
    backgroundColor: "#000000",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Vertical Label Chart</Typography>
      <div
        style={{
          ...wrapper,
          width: "auto",
          height: "auto",
          overflowX: "scroll",
        }}
      >
        <Chart
          type="stackbar"
          data={largeData}
          margin={{ left: 10, right: 10, top: 10, bottom: 20 }}
        >
          <Chart.CartesianGrid vertical={false} />
          <Chart.Tooltip />
          <Chart.XAxis
            dataKey="name"
            angle={-90}
            minTickGap={-100}
            tickLine={false}
            height={120}
            textAnchor="end"
            padding="no-gap" // also gap, no-gap
            label={{ value: "Products", position: "insideBottom" }}
            onClick={(e) => e.preventDefault()}
          />
          <Chart.YAxis
            label={{ value: "counts", angle: -90, position: "insideLeft" }}
          />
          <Chart.Bar dataKey="x" stackId="a" barSize={10} fill="#8884d8" />
          <Chart.Bar dataKey="y" stackId="a" fill="#82ca9d" />
          <Chart.Bar dataKey="z" stackId="a" fill="yellow" />
        </Chart>
      </div>
    </div>
  );
};

export const GroupChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };

  const barGroup = [
    { dataKey: "x", fill: "red" },
    { dataKey: "y", fill: "green" },
    { dataKey: "z", fill: "yellow" },
    { dataKey: "a", fill: "blue" },
    { dataKey: "b", fill: "purple" },
    { dataKey: "c", fill: "brown" },
    { dataKey: "d", fill: "pink" },
    { dataKey: "e", fill: "navyblue" },
    { dataKey: "f", fill: "silver" },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 25,
        backgroundColor: "black",
      }}
    >
      <Typography component="h1">Group Chart</Typography>
      <div
        style={{
          ...wrapper,
          width: "auto",
          height: "auto",
          overflowX: "scroll",
        }}
      >
        <Chart
          type="bar"
          data={smallData}
          height={400}
          width={50 * barGroup.length * smallData.length}
        >
          <Chart.CartesianGrid vertical={false} />
          <Chart.XAxis
            dataKey="name"
            label={{ value: "Products", position: "insideBottom" }}
            height={50}
          />
          <Chart.YAxis
            label={{ value: "Count", angle: -90, position: "insideLeft" }}
          />
          {barGroup.map((bar) => (
            <Chart.Bar dataKey={bar.dataKey} fill={bar.fill} barSize={20} />
          ))}
        </Chart>
      </div>
    </div>
  );
};

export const CustomTooltipChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Custom Tooltip Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="linearea" data={largeData} height={400} width={1000}>
          <Chart.CartesianGrid />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Tooltip content={<CustomTooltip />} />
          <Chart.Area dataKey="x" stroke="#122743" fill="#60A2F9" />
          <Chart.Area dataKey="y" stroke="#122743" fill="#60A2F9" />
        </Chart>
      </div>

      <Typography component="h1">Tooltip With no Cursor Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="bar" data={largeData} height={400} width={1000}>
          <Chart.CartesianGrid />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis />
          <Chart.Tooltip cursor={false} />
          <Chart.Bar dataKey="x" fill="blue" />
          <Chart.Bar dataKey="y" fill="pink" />
        </Chart>
      </div>
    </div>
  );
};

export const LogBarChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };
  const data = [
    { name: "PC-000001", x: 156, y: 1000, z: 12200 },
    { name: "PC-000002", x: 10000, y: 3000, z: 730 },
    { name: "PC-000003", x: 4000, y: 1500000, z: 3200 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Log Chart Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart type="bar" data={data} height={400} width={1000}>
          <Chart.CartesianGrid vertical={false} />
          <Chart.XAxis dataKey="name" />
          <Chart.YAxis scale="log" domain={["auto", "auto"]} />
          <Chart.Tooltip cursor={false} />
          <Chart.Bar dataKey="x" fill="blue" />
          <Chart.Bar dataKey="y" fill="pink" />
          <Chart.Bar dataKey="z" fill="green" />
        </Chart>
      </div>
    </div>
  );
};

export const TimelineChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };
  const data = [
    { date: "Apr 1", x: 5.1, y: 7.5, z: 10.1 },
    { date: "Apr 2", x: 5.15, y: 7.65, z: 10.15 },
    { date: "Apr 3", x: 5.25, y: 7.85, z: 10.85 },
    { date: "Apr 4", x: 5.05, y: 7.5, z: 10.1 },
    { date: "Apr 5", x: 5.33, y: 7.88, z: 10.99 },
    { date: "Apr 6", x: 5.0, y: 7.5, z: 10 },
    { date: "Apr 7", x: 5.66, y: 7.66, z: 10.66 },
    { date: "Apr 8", x: 5.77, y: 7.77, z: 10.77 },
    { date: "Apr 9", x: 5.22, y: 7.22, z: 10.22 },
    { date: "Apr 10", x: 5.88, y: 7.88, z: 10.88 },
    { date: "Apr 11", x: 5.1, y: 7.5, z: 10.1 },
    { date: "Apr 12", x: 5.15, y: 7.65, z: 10.15 },
    { date: "Apr 13", x: 5.25, y: 7.85, z: 10.85 },
    { date: "Apr 14", x: 5.05, y: 7.5, z: 10.1 },
    { date: "Apr 15", x: 5.33, y: 7.88, z: 10.99 },
    { date: "Apr 16", x: 5.0, y: 7.5, z: 10 },
    { date: "Apr 17", x: 5.66, y: 7.66, z: 10.66 },
    { date: "Apr 18", x: 5.77, y: 7.77, z: 10.77 },
    { date: "Apr 19", x: 5.22, y: 7.22, z: 10.22 },
    { date: "Apr 20", x: 5.88, y: 7.88, z: 10.88 },
    { date: "Apr 21", x: 5.1, y: 7.5, z: 10.1 },
    { date: "Apr 22", x: 5.15, y: 7.65, z: 10.15 },
    { date: "Apr 23", x: 5.25, y: 7.85, z: 10.85 },
    { date: "Apr 24", x: 5.05, y: 7.5, z: 10.1 },
    { date: "Apr 25", x: 5.33, y: 7.88, z: 10.99 },
    { date: "Apr 26", x: 5.0, y: 7.5, z: 10 },
    { date: "Apr 27", x: 5.66, y: 7.66, z: 10.66 },
    { date: "Apr 28", x: 5.77, y: 7.77, z: 10.77 },
    { date: "Apr 29", x: 5.22, y: 7.22, z: 10.22 },
    { date: "Apr 30", x: 5.88, y: 7.88, z: 10.88 },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Timeline Chart</Typography>
      <div style={{ ...wrapper, width: "auto", height: "auto" }}>
        <Chart
          type="linearea"
          data={data}
          height={400}
          width={(data.length + 1) * 40}
        >
          <Chart.CartesianGrid />
          <Chart.XAxis dataKey="date" />
          <Chart.YAxis
            label={{ value: "Mhz", angle: -90, position: "insideLeft" }}
          />
          <Chart.Tooltip />
          <Chart.Area dataKey="x" stroke="#FFFFFF" />
          <Chart.Area dataKey="y" stroke="#82ca9d" />
          <Chart.Area dataKey="z" stroke="yellow" />
        </Chart>

        <Chart
          type="linearea"
          data={data}
          height={100}
          width={(data.length + 1) * 40}
        >
          <Chart.CartesianGrid />
          <Chart.XAxis dataKey="date" position="insideBottom" />
          <Chart.YAxis />
          <Chart.Tooltip />
          <Chart.Area dataKey="x" stroke="#8884d8" />
        </Chart>
      </div>
    </div>
  );
};

export const HideAxisLineChart = () => {
  const wrapper = {
    boxSizing: "border-box",
    padding: 15,
    width: "100%",
    minWidth: 600,
    height: 400,
    backgroundColor: "#000000",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 25 }}>
      <Typography component="h1">Hide Axis Line</Typography>
      <div style={{ ...wrapper, minWidth: "400" }}>
        <Chart type="bar" data={smallData} responsive={true}>
          <Chart.CartesianGrid vertical={false} />
          <Chart.Tooltip wrapperStyle={{ backgroundColor: "black" }} />
          <Chart.XAxis dataKey="name" axisLine={false} />
          <Chart.YAxis axisLine={false} />
          <Chart.Legend iconType="circle" />
          <Chart.Bar dataKey="x" fill="#8884d8" />
          <Chart.Bar dataKey="y" fill="#82ca9d" />
          <Chart.Bar dataKey="z" fill="yellow" />
        </Chart>
      </div>
    </div>
  );
};
