import officialCalenderData from "data/official-calender-data.json";

const generateCountNextHoliday = (nowDate: string) => {
  const nowDateIndex = officialCalenderData.findIndex(
    (item) => item.西元日期 === nowDate
  );
  let dayCount = 0;
  for (let i = nowDateIndex; i < officialCalenderData.length; i++) {
    if (officialCalenderData[i].是否放假 === "2") {
      break;
    } else {
      dayCount += 1;
    }
  }
  return dayCount;
};

export default generateCountNextHoliday;
