"use client";

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const series = [
  {
    name: "Mon",
    data: [
      { x: "2am", y: 120 },
      { x: "4am", y: 80 },
      { x: "6am", y: 200 },
      { x: "8am", y: 320 },
      { x: "10am", y: 180 },
      { x: "12am", y: 90 },
    ],
  },
  {
    name: "Tue",
    data: [
      { x: "2am", y: 210 },
      { x: "4am", y: 140 },
      { x: "6am", y: 90 },
      { x: "8am", y: 260 },
      { x: "10am", y: 300 },
      { x: "12am", y: 120 },
    ],
  },
  {
    name: "wed",
    data: [
      { x: "2am", y: 210 },
      { x: "4am", y: 140 },
      { x: "6am", y: 90 },
      { x: "8am", y: 260 },
      { x: "10am", y: 300 },
      { x: "12am", y: 120 },
    ],
  },
  {
    name: "Thur",
    data: [
      { x: "2am", y: 210 },
      { x: "4am", y: 140 },
      { x: "6am", y: 90 },
      { x: "8am", y: 260 },
      { x: "10am", y: 300 },
      { x: "12am", y: 120 },
    ],
  },
  {
    name: "Fri",
    data: [
      { x: "2am", y: 210 },
      { x: "4am", y: 140 },
      { x: "6am", y: 90 },
      { x: "8am", y: 260 },
      { x: "10am", y: 300 },
      { x: "12am", y: 120 },
    ],
  },
  {
    name: "Sat",
    data: [
      { x: "2am", y: 210 },
      { x: "4am", y: 140 },
      { x: "6am", y: 90 },
      { x: "8am", y: 260 },
      { x: "10am", y: 300 },
      { x: "12am", y: 120 },
    ],
  },
  {
    name: "Sun",
    data: [
      { x: "2am", y: 210 },
      { x: "4am", y: 140 },
      { x: "6am", y: 90 },
      { x: "8am", y: 260 },
      { x: "10am", y: 300 },
      { x: "12am", y: 120 },
    ],
  },

];
const options: ApexOptions = {
  chart: {
    type: "heatmap" as const,
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
  tooltip: {
    y: {
      formatter: (val: number) => `${val} Orders`,
    },
  },
  colors: ["#FFE3C2", "#FF9F43"],
  plotOptions: {
    heatmap: {
      radius: 10,
      enableShades: true,
      shadeIntensity: 0.3,
      colorScale: {
        ranges: [
          { from: 0, to: 100, color: "#FFE3C2" },
          { from: 101, to: 200, color: "#FFB703" },
          { from: 201, to: 400, color: "#FF8C42" },
        ],
      },
    },
  },
};
export function OrderHeatmapChart() {
  return (
    <Chart options={options} series={series} type="heatmap" height={400} />
  );
}
