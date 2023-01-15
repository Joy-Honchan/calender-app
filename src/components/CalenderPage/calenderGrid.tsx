import { useMemo, lazy, MouseEvent, useState } from "react";
import { styled, Box, Paper, Typography, IconButton } from "@mui/material";

interface DailyDataType {
  dateInMonth: number;
  dayInWeek: number;
  isDayOff: boolean;
  remark: string;
}

const CalenderGrid = ({ calenderData }: { calenderData: DailyDataType[] }) => {
  const proccessedCalenderData = useMemo(() => {
    const emptyCellData: DailyDataType = {
      dateInMonth: 0,
      dayInWeek: 0,
      isDayOff: false,
      remark: "",
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
        <Box key={`week` + index} className="grid-row weeks-body-row">
          {weeklyRow.map((dailyData, index) => {
            return dailyData.dateInMonth !== 0 ? (
              <Box
                className={`col-cell week-body-col ${
                  dailyData.isDayOff ? "is-dayoff" : null
                }`}
                key={`dailyCell+${index}`}
              >
                <Typography variant="h5" className="date-number">
                  {dailyData.dateInMonth}
                </Typography>
                <Typography variant="caption" className="date-remark">
                  {dailyData.remark || "--"}
                </Typography>
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
    </StyledGrid>
  );
};

const StyledGrid = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(0, 1, 0, 1),
  ".grid-row": {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: theme.spacing(1),
    "&.weeks-head-row": {
      borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      // borderBottom: `${theme.spacing(0.5)} solid ${
      //   theme.palette.primary.light
      // }`,
    },
    "&.weeks-body-row": {
      marginTop: theme.spacing(1),
      // "&:not(:last-child)": {
      //   marginBottom: theme.spacing(1),
      // },
    },
  },
  ".col-cell": {
    padding: `${theme.spacing(1)} 0`,
    fontSize: "1rem",
    "&.week-head-col": {
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: "center",
    },
    "&.week-body-col": {
      textAlign: "center",
      "&.is-dayoff": {
        backgroundColor: theme.palette.primary.light,
      },
      "&:not(.is-dayoff)": {
        color: theme.palette.grey[600],
      },
    },
    "&.empty-col": {
      border: 0,
    },
  },
  //width < 600px
  // [theme.breakpoints.down("sm")]: {
  //   backgroundColor: "green",
  //   ".grid-row": {
  //     "&.weeks-body-row": {
  //       minHeight: 0,
  //     },
  //   },
  // },
}));

export default CalenderGrid;
