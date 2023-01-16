import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import annotationPlugin, { AnnotationOptions } from "chartjs-plugin-annotation";
import { Bar } from "react-chartjs-2";
import { getMonthlyData } from "utils/generateChartData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

interface AnnotationsType {
  annotation?: {
    annotations: {
      topWorkday: AnnotationOptions<"label">;
      topDayoff: AnnotationOptions<"label">;
    };
  };
}

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

const BarChart = () => {
  const { workDayData, dayOffData } = getMonthlyData();

  const annotationPosints = (dataType: "workDayData" | "dayOffData") => {
    const sourceData = dataType === "workDayData" ? workDayData : dayOffData;
    const topindex = sourceData.findIndex(
      (item, _, self) => item === Math.max(...self)
    );
    return {
      yValue: sourceData[topindex],
      xValue: labels[topindex],
    };
  };

  const options: ChartOptions<"bar"> & AnnotationsType = {
    scales: {
      y: {
        max: 30,
      },
    },
    // responsive: true,
    aspectRatio: 2.5,
    // maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "2023年上班及放假天數統計",
        font: { size: 20 },
      },
      legend: {
        onClick: () => {
          return;
        },
        position: "top" as const,
      },
      annotation: {
        annotations: {
          topWorkday: {
            type: "label",
            content: `👑 工作日:${annotationPosints("workDayData").yValue}天`,
            backgroundColor: "rgba(255, 75, 41, 0.4)",
            font: { size: 12 },
            yAdjust: -15,
            xAdjust: -15,
            borderWidth: 1,
            yValue: annotationPosints("workDayData").yValue,
            xValue: annotationPosints("workDayData").xValue,
          },
          topDayoff: {
            type: "label",
            content: `👑 放假日:${annotationPosints("dayOffData").yValue}天`,
            backgroundColor: "rgba(25, 123, 189, 0.4)",
            font: { size: 12 },
            yAdjust: -15,
            xAdjust: 15,
            borderWidth: 1,
            yValue: annotationPosints("dayOffData").yValue,
            xValue: annotationPosints("dayOffData").xValue,
          },
        },
      },
    },
  };
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

  return <Bar data={chartConfig} options={options} />;
};

export default BarChart;
