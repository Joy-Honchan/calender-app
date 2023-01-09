import { styled, Box } from "@mui/material";
import NavigateButtoms from "components/UI/NavigateButtons";
const ChartPage = () => {
  return (
    <StyleWrapper>
      <NavigateButtoms currentPage={2} />
      ChartPage
    </StyleWrapper>
  );
};
const StyleWrapper = styled(Box)(({ theme }) => ({}));
export default ChartPage;
