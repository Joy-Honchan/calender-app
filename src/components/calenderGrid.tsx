import { useMemo, lazy, MouseEvent, useState } from "react";
import { styled, Box, Paper, Typography, IconButton } from "@mui/material";
import { DailyDataType } from "../type/type";
import dayjs from "dayjs";
import AddEventDialog from "./AddEventDialog";
import { IconSuspenseWrapper } from "./UI/SuspenseWrapper";

const AddCircleOutlineIcon = lazy(
  () => import("@mui/icons-material/AddCircleOutline")
);

const CalenderGrid = ({ calenderData }: { calenderData: DailyDataType[] }) => {
  const [nowEditingDay, setNowEditingDay] = useState<number | null>(null);
  const proccessedCalenderData = useMemo(() => {
    const emptyCellData: DailyDataType = {
      date: 0,
      dayInWeek: 0,
      events: [],
    };
    let tablebody: DailyDataType[][] = [];
    let weeklyRow: DailyDataType[] = [];

    calenderData.forEach((dailyData, index) => {
      if (index === 0 && dailyData.dayInWeek !== 0) {
        for (let i = 0; i < dailyData.dayInWeek; i++) {
          weeklyRow.push({ ...emptyCellData, dayInWeek: i });
        }
      }
      weeklyRow.push(dailyData);
      if (dailyData.dayInWeek === 6) {
        tablebody.push(weeklyRow);
        weeklyRow = [];
      } else if (
        calenderData.length === index + 1 &&
        dailyData.dayInWeek !== 6
      ) {
        for (let i = dailyData.dayInWeek + 1; i <= 6; i++) {
          weeklyRow.push({ ...emptyCellData, dayInWeek: i });
        }
        tablebody.push(weeklyRow);
        weeklyRow = [];
      }
    });
    return tablebody;
  }, [calenderData]);

  const handleAddEvent = (
    e: MouseEvent<HTMLLabelElement>,
    timeStamp: number
  ) => {
    setNowEditingDay(timeStamp);
  };
  const handleDialogClose = () => setNowEditingDay(null);

  return (
    <StyledGrid>
      <Box className="grid-row weeks-head-row">
        <Box className="col-cell week-head-col">日</Box>
        <Box className="col-cell week-head-col">一</Box>
        <Box className="col-cell week-head-col">二</Box>
        <Box className="col-cell week-head-col">三</Box>
        <Box className="col-cell week-head-col">四</Box>
        <Box className="col-cell week-head-col">五</Box>
        <Box className="col-cell week-head-col">六</Box>
      </Box>
      {proccessedCalenderData.map((weeklyRow, index) => (
        <Box key={`week` + index} className="grid-row weeks-grid-body">
          {weeklyRow.map((dailyData, index) => {
            return dailyData.date !== 0 ? (
              <Box
                className="col-cell week-body-col"
                key={`dailyCell+${index}`}
              >
                <div className="date-caontainer">
                  <Typography>
                    {dayjs.unix(dailyData.date).get("date")}
                    <IconButton
                      onClick={(e) => handleAddEvent(e, dailyData.date)}
                      color="primary"
                      aria-label="add-event"
                      component="label"
                    >
                      <IconSuspenseWrapper
                        component={<AddCircleOutlineIcon />}
                      />
                    </IconButton>
                  </Typography>
                </div>
                <Box className="daily-content-list"></Box>
              </Box>
            ) : (
              <Box
                className="col-cell week-body-col empty-col"
                key={`dailyCell+${index}`}
              ></Box>
            );
          })}
        </Box>
      ))}
      <AddEventDialog
        nowEditingDay={nowEditingDay}
        handleDialogClose={handleDialogClose}
      />
    </StyledGrid>
  );
};

const StyledGrid = styled(Paper)(({ theme }) => ({
  ".grid-row": {
    display: "grid",
    gridTemplateColumns: "repeat(7, minmax(165px, 1fr))",
    gap: theme.spacing(0.5),
    "&.weeks-head-row": {
      borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`,
      backgroundColor: theme.palette.primary,
      borderBottom: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
    },
    "&.weeks-grid-body": {
      padding: `0 ${theme.spacing(1)}`,
    },
  },
  ".col-cell": {
    padding: 0,
    fontSize: "1rem",
    "&.week-head-col": {
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: "center",
      padding: `${theme.spacing(1)} 0`,
    },
  },
  ".week-body-col": {
    ".date-caontainer": {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.grey[300],
      ".MuiTypography-root": {
        display: "flex",
        justifyContent: "space-between",
        fontWeight: theme.typography.fontWeightMedium,
        ".checkout-link": {
          display: "flex",
          color: theme.palette.primary.main,
          textDecoration: "none",
        },
      },
    },
    ".daily-content-list": {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    ".content-inner-line": {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  ".empty-col": {
    border: 0,
  },
}));

export default CalenderGrid;
