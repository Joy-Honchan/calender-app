import { getEveryDateInMonth } from "../utils/generateDates";

export interface EventType {
  priority: "High" | "Medium" | "Low";
  title: string;
  time: number;
}

export interface DailyDataType {
  date: number;
  dayInWeek: number;
  events: EventType[];
}

export const generateCalenderData = (year: number, month: number) => {
  let eventData: { date: number; events: EventType[] }[] = [];

  const monthlyData: DailyDataType[] = getEveryDateInMonth(year, month).map(
    (dateObj) => ({
      date: dateObj.unix(),
      dayInWeek: dateObj.day(),
      events: [],
    })
  );

  if (localStorage.getItem("calender-data") !== null) {
    eventData = JSON.parse(localStorage.getItem("calender-data") as string);
    eventData.forEach((dailyEvent) => {
      const thisDay = monthlyData.find(
        (dailyData) => dailyData.date === dailyEvent.date
      );
      if (thisDay) {
        thisDay.events = dailyEvent.events;
      }
    });
  }
  return monthlyData;
};
