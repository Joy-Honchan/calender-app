import { useState, useEffect, ChangeEvent, useMemo } from "react";
import { styled, Box, Typography, Pagination } from "@mui/material";
import dayjs from "dayjs";
import CalenderGrid from "components/CalenderPage/calenderGrid";
import NavigateButtoms from "components/UI/NavigateButtons";
import { getEveryDateInMonth } from "utils/generateDates";

const CalenderPage = () => {
  const thisMonth = dayjs().get("month") + 1;
  // const todayDate = dayjs().get("date");
  const [chosenMonth, setChosenMonth] = useState<number>(thisMonth);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setChosenMonth(value);
  };

  const calenderData = useMemo(() => {
    return chosenMonth ? getEveryDateInMonth(chosenMonth) : [];
  }, [chosenMonth]);

  return (
    <StyleWrapper>
      <NavigateButtoms currentPage={1} />
      {chosenMonth ? (
        <>
          <Box className="choose-month-container">
            <Typography variant="h6">
              請選擇2023月份：
              <Pagination
                className="month-pagination"
                color="primary"
                count={12}
                page={chosenMonth}
                onChange={handleChange}
              />
            </Typography>
          </Box>
          <CalenderGrid
            calenderData={calenderData}
            // todayDate={thisMonth === chosenMonth ? todayDate : undefined}
            todayDate={undefined}
          />
        </>
      ) : null}
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  ".choose-month-container": {
    padding: theme.spacing(1.5, 0, 1.5, 0),
    textAlign: "center",
    ".month-pagination": {
      display: "inline-block",
    },
  },

  ".calender-chart-container": {
    minWidth: "600px",
  },
}));
export default CalenderPage;
