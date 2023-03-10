import officialCalenderData from "data/official-calender-data.json";

const weekObj: { [x: string]: number } = {
  日: 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
};

export const getEveryDateInMonth = (month: number) => {
  const monthString = month < 10 ? `0${month}` : `${month}`;
  return officialCalenderData
    .filter((item) => item.西元日期.startsWith(`2023${monthString}`))
    .map((item) => ({
      dateInMonth: Number(item.西元日期.slice(6, 8)),
      dayInWeek: weekObj[item.星期],
      isDayOff: Boolean(item.是否放假 === "2"),
      remark: item.備註,
    }));
};
