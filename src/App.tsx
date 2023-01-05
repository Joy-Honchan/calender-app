import React, { useState, ChangeEvent, useMemo, useEffect, lazy } from "react";
import { Theme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { styled, Box, TextField } from "@mui/material";
// import CalenderGrid from "./components/calenderGrid";
// import { generateCalenderData } from "./type/type";
import dayjs from "dayjs";
import { PageSuspenseWrapper } from "components/UI/SuspenseWrapper";

// import Page Elements
const LandingPage = lazy(() => import("components/LandingPage/index"));
const CalenderPage = lazy(() => import("components/CalenderPage/index"));
const ChartPage = lazy(() => import("components/ChartPage/index"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageSuspenseWrapper component={<LandingPage />} />,
    errorElement: <div>There is a Error</div>,
  },
  {
    path: "/calender",
    element: <PageSuspenseWrapper component={<CalenderPage />} />,
  },
  {
    path: "/chart",
    element: <PageSuspenseWrapper component={<ChartPage />} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // <ThemeProvider>
  {
    /* </ThemeProvider>; */
  }
}

// function App() {
//   const nowTime = dayjs();
//   const [chosenYearMonth, setChosenYearMonth] = useState<
//     [number, number] | null
//   >(null);
//   useEffect(() => {
//     setChosenYearMonth([nowTime.get("year"), nowTime.get("month")]);
//   }, []);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const yearMontharr = event.target.value.split("-");
//     setChosenYearMonth([Number(yearMontharr[0]), Number(yearMontharr[1])]);
//   };

//   const calenderData = useMemo(() => {
//     return chosenYearMonth
//       ? generateCalenderData(chosenYearMonth[0], chosenYearMonth[1])
//       : [];
//   }, [chosenYearMonth]);

//   return (
//     <StyleWrapper>
//       <Box className="textfield-container">
//         <TextField
//           label={"選擇月份"}
//           type="month"
//           defaultValue={nowTime.format("YYYY-MM")}
//           size="small"
//           sx={{ width: 150 }}
//           onChange={handleChange}
//           inputProps={{
//             min: "2023-01",
//             max: "2023-12",
//           }}
//         />
//       </Box>

//       {chosenYearMonth ? <CalenderGrid calenderData={calenderData} /> : null}
//     </StyleWrapper>
//   );
// }

// const StyleWrapper = styled(Box)(({ theme }) => ({
//   padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
//   ".textfield-container": {
//     paddingBottom: theme.spacing(2),
//   },

//   ".calender-chart-container": {
//     minWidth: "600px",
//   },
// }));

export default App;
