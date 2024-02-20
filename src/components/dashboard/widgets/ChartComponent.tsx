import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import useColorByMode from "../../../hooks/useColorByMode";

const ChartComponent = () => {
  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );

  const chartData = cardsData.map((card) => ({
    name: card.investmentName,
    y: card.value,
  }));

  const options = {
    chart: {
      backgroundColor: useColorByMode("#1F2937", "#F3F4F6"),
      borderRadius: "20",
    },
    title: {
      text: "Area investments",
      style: {
        color: useColorByMode("#FFFFFF", "#000000"),
      },
    },
    plotOptions: {
      pie: {
        innerSize: "70%",
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
