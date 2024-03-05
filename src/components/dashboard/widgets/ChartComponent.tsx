import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { RootState } from "../../../reducers";
import useColorByMode from "../../../hooks/useColorByMode";
import { ChartData } from "../../../interfaces/chartData";

const ChartComponent = () => {
  const cardsData = useSelector(
    (state: RootState) => state.dashboard.cardsData
  );

  const formattedChartData = cardsData.map((card) => ({
    name: card.investmentName,
    y: card.value,
  }));

  const aggregateChartData = (data: ChartData[]) => {
    const aggregatedData: { [name: string]: number } = {};

    data.forEach(({ name, y }: any) => {
      if (aggregatedData[name]) {
        aggregatedData[name] += y;
      } else {
        aggregatedData[name] = y;
      }
    });

    return Object.keys(aggregatedData).map((name) => ({
      name,
      y: aggregatedData[name],
    }));
  };

  const chartData = aggregateChartData(formattedChartData);

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
