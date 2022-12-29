import dayjs from 'dayjs'

export const getEveryDateInMonth = (year: number, month: number) => {

  const date = new Date(year, month - 1, 1);

  const dates = [];

  while (date.getMonth() === month - 1) {
    dates.push(dayjs(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}

