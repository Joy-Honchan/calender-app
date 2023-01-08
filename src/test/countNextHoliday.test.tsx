import React from "react";
import { render, screen } from "@testing-library/react";
import generateCountNextHoliday from "utils/countNextHoliday";

test("01-09 left 5", () => {
  const testDate = generateCountNextHoliday("20230109");
  expect(testDate).toBe(5);
});

test("12-31 left 0", () => {
  const testDate = generateCountNextHoliday("20231231");
  expect(testDate).toBe(0);
});

test("12-29 left 1", () => {
  const testDate = generateCountNextHoliday("20231229");
  expect(testDate).toBe(1);
});

test("05-24 left 3", () => {
  const testDate = generateCountNextHoliday("20230524");
  expect(testDate).toBe(3);
});
