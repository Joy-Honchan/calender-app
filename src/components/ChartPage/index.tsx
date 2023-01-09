import { styled, Box } from "@mui/material";
import NavigateButtoms from "components/UI/NavigateButtons";
import { getMonthlyData } from "utils/generateChartData";
const ChartPage = () => {
  const { workDayData, dayOffData } = getMonthlyData();
  return (
    <StyleWrapper>
      <NavigateButtoms currentPage={2} />
      上班天: {workDayData.join(", ")}
      放假天: {dayOffData.join(", ")}
    </StyleWrapper>
  );
};
const StyleWrapper = styled(Box)(({ theme }) => ({}));
export default ChartPage;
