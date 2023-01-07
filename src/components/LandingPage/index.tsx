import { useState } from "react";
import { styled, Box, Typography } from "@mui/material";
const LandingPage = () => {
  return (
    <StyleWrapper>
      <Typography>距離下個假日還有 4 天</Typography>
      <Typography>加油!再撐一下下 (*•̀ㅂ•́)و</Typography>
      <a href="https://www.freepik.com/free-vector/summer-landscape-wallpaper-zoom_8940571.htm#query=vacation&position=9&from_view=search&track=sph">
        Image by pikisuperstar
      </a>
      on Freepik
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url('image/4048260.jpg')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: theme.palette.primary.light,
  "@media (min-width:900px) and (orientation: landscape)": {
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  // [theme.breakpoints.down("md")]: {
  //   backgroundSize: "cover",
  // },
}));

export default LandingPage;
