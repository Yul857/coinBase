import "./App.css";

import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
Highcharts.setOptions({
  colors: ["#058DC7", "#50B432", "#ED561B", "#DDDF00", "#24CBE5"],
});

const dataObject = {
  values: [1.1, 0.8, 0.12, 0.9, 3],
  previousValues: [
    21.5, 171.5, 156.4, 29.2, 44.0, 96.0, 112.6, 156.5, 106.4, 124.1, 105.6,
    84.4,
  ],
  labels: ["FTM", "XRP", "DOGE", "ADA", "XTZ"],
};

const barOptions = {
  title: {
    text: "Crypto Bar Chart",
  },
  xAxis: {
    categories: dataObject.labels,
  },
  yAxis: {
    title: {
      text: "Coin Price",
    },
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: false,
    },
  },
  series: [
    {
      type: "bar",
      name: "Taiwan",
      data: [
        { y: 34.4, color: "#058DC7" },
        { y: 34.4, color: "#50B432" },
        { y: 20.1, color: "#ED561B" }, 
        { y: 34.4, color: "#DDDF00" },
        { y: 34.4, color: "#24CBE5" },
      ],
    },
  ],
};

const donutOptions = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Crypto Pie Chart",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Month",
      colorByPoint: true,
      data: [
        {
          name: dataObject.labels[0],
          y: dataObject.values[0],
          sliced: true,
          selected: true,
        },
        {
          name: dataObject.labels[1],
          y: dataObject.values[1],
        },
        {
          name: dataObject.labels[2],
          y: dataObject.values[2],
        },
        {
          name: dataObject.labels[3],
          y: dataObject.values[3],
        },
        {
          name: dataObject.labels[4],
          y: dataObject.values[4],
        },
      ],
    },
  ],
};

const App = () => (
  <div className="flex w-full m-2">
    <div className="w-1/2 m-2">
      <HighchartsReact
        highcharts={Highcharts}
        options={barOptions}
        containerProps={{ style: { height: "100%", weight: "100%" } }}
      />
    </div>
    <div className="w-1/2 m-2">
      <HighchartsReact
        highcharts={Highcharts}
        options={donutOptions}
        containerProps={{ style: { height: "100%", weight: "100%" } }}
      />
    </div>
  </div>
);

export default App;
