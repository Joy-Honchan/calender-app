import { styled, Box } from "@mui/material";
import NavigateButtoms from "components/UI/NavigateButtons";
import BarChart from "./BarChart";
const ChartPage = () => {
  return (
    <StyleWrapper>
      <NavigateButtoms currentPage={2} />
      <BarChart />
    </StyleWrapper>
  );
};
const StyleWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",
  padding: theme.spacing(2),
  // padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  ".container-scroller": {
    padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
    overflowX: "auto",
    ".barchart-container": {
      minWidth: "800px",
    },
  },
}));
export default ChartPage;
