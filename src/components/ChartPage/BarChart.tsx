import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getMonthlyData } from "utils/generateChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const { workDayData, dayOffData } = getMonthlyData();
  const options = {
    // scales: {
    //   y: {
    //     max: 31,
    //   },
    // },
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const labels = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];
  const chartConfig = {
    labels,
    datasets: [
      {
        label: "上班天數",
        data: workDayData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "放假天數",
        data: dayOffData,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="container-scroller">
      <div className="barchart-container">
        <Bar data={chartConfig} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
