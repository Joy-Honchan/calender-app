import React from "react";
import { render, screen } from "@testing-library/react";
import { getMonthlyData } from "utils/generateChartData";
import dayjs from "dayjs";

let i = 0;
const eachFirsthinMonth = Array.from({ length: 12 }, () => {
  i += 1;
  return i < 10 ? `2023-0${i}-01` : `2023-${i}-01`;
});
const { workDayData, dayOffData } = getMonthlyData();
const outputDateInMonth = workDayData.map(
  (item, index) => item + dayOffData[index]
);

test("correct days in month", () => {
  const expectDateInMonth = eachFirsthinMonth.map((date) =>
    dayjs(date).daysInMonth()
  );
  const comparingArrays = outputDateInMonth.every(
    (item, index) => item === expectDateInMonth[index]
  );
  expect(comparingArrays).toBe(true);
});

test("workDayData length is 12", () => {
  expect(workDayData.length).toBe(12);
});

test("dayOffData length is 12", () => {
  expect(dayOffData.length).toBe(12);
});

test("outputDateInMonth length is 12", () => {
  expect(outputDateInMonth.length).toBe(12);
});
