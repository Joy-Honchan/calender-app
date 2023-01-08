import { useState } from "react";
import { Link } from "react-router-dom";
import { styled, Box, Typography, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import DayCountDown from "./DayCountDown";
import dayjs from "dayjs";
import generateCountNextHoliday from "utils/countNextHoliday";

const LandingPage = () => {
  const daysBeforeNextHoliday = generateCountNextHoliday(
    dayjs().format("YYYYMMDD")
  );
  // console.log("daysBeforeNextHoliday", daysBeforeNextHoliday);
  return (
    <StyleWrapper>
      <Box className="center-section-box">
        <DayCountDown total={daysBeforeNextHoliday} />
        <Box className="buttons-box">
          <Link to={"/calender"}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<CalendarMonthIcon />}
            >
              前往行事曆
            </Button>
          </Link>
          <Link to={"/chart"}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<BarChartIcon />}
            >
              前往統計表
            </Button>
          </Link>
        </Box>
      </Box>
      <Typography role="picture-credit" className="picture-credit">
        <a href="https://www.freepik.com/free-vector/summer-landscape-wallpaper-zoom_8940571.htm#query=vacation&position=9&from_view=search&track=sph">
          Image by pikisuperstar
        </a>{" "}
        on Freepik
      </Typography>
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  //background settings
  backgroundImage: "url('image/4048260.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "@media (min-width:900px) and (orientation: landscape)": {
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".landing-title-box": {
    textAlign: "center",
    ".next-holiday-countdown-typography": {
      textShadow: `3px 3px ${theme.palette.grey[400]}`,
      fontWeight: theme.typography.fontWeightBold,
      paddingTop: theme.spacing(1),
    },
    ".landing-slogan-typography": {
      paddingTop: theme.spacing(1),
    },
  },
  ".buttons-box": {
    display: "flex",
    justifyContent: "space-around",
    padding: `${theme.spacing(2)} 0`,
    button: {
      color: "black",
      "&:hover": {
        color: theme.palette.grey[200],
      },
    },
    a: {
      textDecoration: "none",
    },
  },
  ".picture-credit": {
    backgroundColor: "rgba(219, 219, 219, 0.7)",
    position: "absolute",
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

export default LandingPage;
