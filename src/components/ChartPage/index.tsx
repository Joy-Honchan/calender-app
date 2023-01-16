import { styled, Box } from "@mui/material";
import NavigateButtoms from "components/UI/NavigateButtons";
import BarChart from "./BarChart";
const ChartPage = () => {
  return (
    <StyleWrapper>
      <NavigateButtoms currentPage={2} />
      <Box className="container-scroller">
        <Box className="barchart-container">
          <BarChart />
        </Box>
      </Box>
    </StyleWrapper>
  );
};
const StyleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  maxHeight: "100vh",
  padding: theme.spacing(2),
  // padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  ".container-scroller": {
    padding: theme.spacing(0, 1),
    overflowX: "auto",
    overflowY: "auto",
    position: "relative",
    ".barchart-container": {
      minWidth: "800px",
    },
  },
}));
export default ChartPage;
