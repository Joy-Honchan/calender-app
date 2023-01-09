import { useState, useEffect, ChangeEvent, useMemo } from "react";
import { styled, Box, TextField } from "@mui/material";
import dayjs from "dayjs";
import CalenderGrid from "components/CalenderPage/calenderGrid";
import NavigateButtoms from "components/UI/NavigateButtons";
import { getEveryDateInMonth } from "utils/generateDates";

const CalenderPage = () => {
  const nowTime = dayjs();
  const [chosenYearMonth, setChosenYearMonth] = useState<string | null>(null);
  useEffect(() => {
    setChosenYearMonth(nowTime.format("YYYYMM"));
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const yearMonth = event.target.value.split("-").join("");
    setChosenYearMonth(yearMonth);
  };

  const calenderData = useMemo(() => {
    return chosenYearMonth ? getEveryDateInMonth(chosenYearMonth) : [];
  }, [chosenYearMonth]);

  return (
    <StyleWrapper>
      <NavigateButtoms currentPage={1} />
      <Box className="textfield-container">
        <TextField
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
        />
      </Box>

      {chosenYearMonth ? <CalenderGrid calenderData={calenderData} /> : null}
    </StyleWrapper>
  );
};

const StyleWrapper = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
  ".textfield-container": {
    padding: `${theme.spacing(2)} 0`,
    textAlign: "center",
  },

  ".calender-chart-container": {
    minWidth: "600px",
  },
}));
export default CalenderPage;
