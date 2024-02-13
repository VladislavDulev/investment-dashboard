import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = () => {
  // Mocked data for the categories
  const chartData = [
    { name: "Cash", y: 10 },
    { name: "Crypto", y: 20 },
    { name: "Stocks", y: 30 },
    { name: "Gold", y: 40 },
    { name: "Property", y: 50 },
    { name: "Land", y: 60 },
  ];

  // Highcharts configuration options for a donut chart
  const options = {
    title: {
      text: "Asset Distribution",
    },
    plotOptions: {
      pie: {
        innerSize: "50%", // Make it a donut chart by setting innerSize
        depth: 45, // Adjust the depth of the donut chart
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        type: "pie",
        data: chartData,
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ChartComponent;
