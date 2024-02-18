import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import { getColorByMode } from "../../../utils/utils";

const ChartComponent = () => {
  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );

  const isDarkMode = useSelector(
    (state: RootState) => state.sidebar.isDarkMode
  );

  const chartData = cardsData.map((card) => ({
    name: card.investmentName,
    y: card.value,
  }));

  const options = {
    chart: {
      backgroundColor: getColorByMode(isDarkMode, "#1F2937", "#F3F4F6"),
      borderRadius: "20",
    },
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
    accessibility: {
      enabled: false,
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
