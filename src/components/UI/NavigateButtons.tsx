import { lazy } from "react";
import { styled, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { IconSuspenseWrapper } from "components/UI/SuspenseWrapper";

const CalendarMonthIcon = lazy(
  () => import("@mui/icons-material/CalendarMonth")
);
const BarChartIcon = lazy(() => import("@mui/icons-material/BarChart"));
const HomeIcon = lazy(() => import("@mui/icons-material/Home"));

const CalenderBtn = () => (
  <Link to={"/calender"}>
    <Button
      variant="contained"
      color="secondary"
      startIcon={<IconSuspenseWrapper component={<CalendarMonthIcon />} />}
    >
      前往行事曆
    </Button>
  </Link>
);

const ChartBtn = () => (
  <Link to={"/chart"}>
    <Button
      variant="contained"
      color="secondary"
      startIcon={<IconSuspenseWrapper component={<BarChartIcon />} />}
    >
      前往統計表
    </Button>
  </Link>
);

const HomeBtn = () => (
  <Link to={"/"}>
    <Button
      variant="contained"
      color="secondary"
      startIcon={<IconSuspenseWrapper component={<HomeIcon />} />}
    >
      回到首頁
    </Button>
  </Link>
);

const NavigateButtoms = ({ currentPage }: { currentPage: number }) => {
  return (
    <StyleWrapper>
      {currentPage === 2 ? (
        <>
          <HomeBtn />
          <CalenderBtn />
        </>
      ) : currentPage === 1 ? (
        <>
          <HomeBtn />
          <ChartBtn />
        </>
      ) : (
        <>
          <CalenderBtn />
          <ChartBtn />
        </>
      )}
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  gap: "15px",
  // justifyContent: "space-around",
  button: {
    color: "black",
    "&:hover": {
      color: theme.palette.grey[200],
    },
  },
  a: {
    textDecoration: "none",
  },
}));
export default NavigateButtoms;
