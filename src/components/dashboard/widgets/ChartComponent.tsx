import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ChartComponent = () => {
  const chartData = [
    { name: "Cash", y: 10 },
    { name: "Crypto", y: 20 },
    { name: "Stocks", y: 30 },
    { name: "Gold", y: 40 },
    { name: "Property", y: 50 },
    { name: "Land", y: 60 },
  ];

  const options = {
    title: {
      text: "Asset Distribution",
    },
    plotOptions: {
      pie: {
        innerSize: "50%",
        depth: 45,
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
