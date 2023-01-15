import { useState, useEffect, ChangeEvent, useMemo } from "react";
import { styled, Box, Typography, Pagination } from "@mui/material";
import dayjs from "dayjs";
import CalenderGrid from "components/CalenderPage/calenderGrid";
import NavigateButtoms from "components/UI/NavigateButtons";
import { getEveryDateInMonth } from "utils/generateDates";

const CalenderPage = () => {
  const nowTime = dayjs();
  const [chosenMonth, setChosenMonth] = useState<number | null>(null);
  useEffect(() => {
    setChosenMonth(nowTime.get("month") + 1);
  }, []);

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

            {/* <TextField
          label={"選擇月份"}
          type="month"
          defaultValue={nowTime.format("YYYY-MM")}
          size="small"
          sx={{ width: 150 }}
          onChange={handleChange}
          inputProps={{
            min: "2023-01",
            max: "2023-12",
          }}
        /> */}
          </Box>
          <CalenderGrid calenderData={calenderData} />
        </>
      ) : null}
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  ".choose-month-container": {
    padding: `${theme.spacing(2)} 0`,
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
