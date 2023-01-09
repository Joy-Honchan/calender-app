import officialCalenderData from "data/official-calender-data.json";

export const getMonthlyData = () => {
  let workDays = Array.from({ length: 12 }, () => 0);
  let dayOffs = Array.from({ length: 12 }, () => 0);
  officialCalenderData.forEach(({ 西元日期: date, 是否放假: isDayOff }) => {
    const monthIndex = Number(date.slice(4, 6)) - 1;
    isDayOff === "0" ? (workDays[monthIndex] += 1) : (dayOffs[monthIndex] += 1);
  });
  return { workDayData: workDays, dayOffData: dayOffs };
};
