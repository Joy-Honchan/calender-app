import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const DayCountDown = ({ total }: { total: number }) => {
  return (
    <Box className="landing-title-box">
      <Typography variant="h3" className="next-holiday-countdown-typography">
        距離下個假日
      </Typography>
      <Typography variant="h3" className="next-holiday-countdown-typography">
        還有
        <CountUp end={total} />天
      </Typography>
      <Typography className="landing-slogan-typography">
        加油!再撐一下下 (*•̀ㅂ•́)و
      </Typography>
    </Box>
  );
};

export default DayCountDown;
