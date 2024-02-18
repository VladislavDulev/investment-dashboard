import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";

const ChartComponent = () => {
  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );

  const chartData = cardsData.map((card) => ({
    name: card.investmentName,
    y: card.value,
  }));

  const options = {
    title: {
      text: "Area investments",
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
